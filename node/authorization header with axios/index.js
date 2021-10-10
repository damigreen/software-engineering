const app = require("express")();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: false }));

const url = "http://127.0.0.1:3007"
const token = 'token'

app.get("/", (req, res) => {
    // res.send('God is good')
    console.log('--routes')
});

// axios.post(url, {
//     name: "damigreen",
//     age: 29
// }, {
//     headers: {
//         "Authorization": `Basic ${token}`
//     }
// })
// .then(response => console.log(response.data))
// .catch(err => console.log(err))
// send a POST request
axios({
    method: 'post',
    url: url,
    data: {
      firstName: 'Finn',
      lastName: 'Williams'
    }
  });

const PORT = 3007;
app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});
