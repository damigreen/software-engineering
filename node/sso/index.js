const app = require("express")();
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
// import fetch from "node-fetch"
const fetch = require("node-fetch");
const port = 3001;

app.use(cookieParser("cookie-secret"));

const user = {
  UID: "JU8399PZ",
  email: "fashfired@gmail.com",
  password: "123",
};

app.get("/", (req, res) => {
  // console.log(path.dirname("node/sso"))
  res.json({
    message: "God is awesome",
  });
});

app.get("/api", (req, res) => {
  // console.log(path.dirname("node/sso"))
  res.json({
    message: "server 1",
  });
});

app.get("/login-page", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/login", (req, res) => {
  const { email, password, redirectUrl } = req.query;

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ UID: user.UID }, "jwt-secret-one", {
      expiresIn: "1d",
    });

    res.cookie("Authorization", token, {
      expires: new Date(new Date().setDate(new Date().getDate() + 1)),
      httpOnly: true,
      signed: true,
    });
    // res.redirect(redirectUrl)
    res.redirect("http://localhost:3001/api");

    return;
  }
  res.status(401).send();
});

app.get("/auth", (req, res) => {
  const authToken = req.signedCookies["Authorization"];
  // const redirectUrl = req.query;
  const redirectUrl = "http://localhost:3001/api";

  if (!authToken) {
    res.redirect(`/login-page?redirectUrl=${redirectUrl}`);
  }
  try {
    const UID = jwt.verify(authToken, "jwt-secret-one");
    if (user.UID) {
      const identificationToken = jwt.sign({ UID }, "jwt-secret-two", {
        expiresIn: "30s",
      });
      return res.redirect(
        `${redirectUrl}?identificationToken=${identificationToken}`
      );
    }
  } catch (error) {
    console.log(error);
    return res.redirect(`/login-page?redirect=${redirectUrl}`);
  }
});

app.get("/get-identity", (req, res, next) => {
  const { identificationToken } = req.query;

  try {
    const { UID } = jwt.verify(identificationToken, "jwt-secret-two");
    console.log(UID.UID);
    console.log(user.UID);

    if (user.UID === UID.UID) {
      res.json({ UID });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send();
  }
});

const AUTH_SERVER = "http://localhost:3001";

const authMiddleware = async (req, res, next) => {
  const indentificationToken = req.query.identificationToken;

  console.log("route-->", req.route.path);
  console.log("header host-->", req.headers.host);

  const { href: target } = new URL(
    req.route.path || "",
    `http://${req.headers.host}`
  );


  console.log("checking identification token------->");

  if (indentificationToken) {
  console.log(" identification token present------->");

    const fetchRes = await fetch(
      `${AUTH_SERVER}/get-identity?indentificationToken=${indentificationToken}`
    );

    console.log("fetchRes------->", fetchRes);

    if (fetchRes.status === 200) {
      const { UID } = await fetchRes.json();
      req.UID = UID;
      return next();
    } else {
      return res.redirect(`${AUTH_SERVER}/auth?redirectUrl=${target}`);
    }
  }

  res.redirect(`${AUTH_SERVER}/auth?redirectUrl=${target}`);
};

app.get("/my-page", authMiddleware, (req, res) => {
  res.send("Hello you are in" + req.UID);
});

app.listen(port, () => {
  console.log("Auth Server is up at port", port);
});
