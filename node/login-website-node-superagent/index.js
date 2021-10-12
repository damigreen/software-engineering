// https://apiv1.vampfi.com/oauth/login
const superagent = require("superagent").agent();
const axios = require("axios");

const vamp = async () => {
  //   let dashboard = await superagent
  //     .post("https://apiv1.vampfi.com/oauth/login")
  //     .send({ uniq_id: "support@vampfi.com", password: "Z5X7ZSb6X9VhBt9", type: "email" })
  //     // .set("Content-Type", "application/json")

  //   const dashbord = await superagent
  //     // .post("https://accounts.datoms.io/login")
  //     // .post("https://accounts.datoms.io/login")
  //     .post("https://api.datoms.io/-/api/iot-platform/v1.1.0/accounts/login")
  //     .send({
  //       email_id: "demo12@iobotech.com",
  //       password: "123456",
  //       source: "website",
  //       source_id: 1,
  //       target:
  //         "https://app.datoms.io/enterprise/1083/dg-monitoring/detailed-view/?thing_id=7284",
  //     })
  //     // .set("Content-Type", "application/json")
  //     .catch(error => {
  //         console.log(error)
  //     })

  //     console.log(dashbord)

  axios
    .post("https://api.datoms.io/-/api/iot-platform/v1.1.0/accounts/login", {
      email_id: "demo12@iobotech.com",
      password: "123456",
      source: "website",
      source_id: 1,
      target:
        "https://app.datoms.io/enterprise/1083/dg-monitoring/detailed-view/?thing_id=7284",
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

vamp();
