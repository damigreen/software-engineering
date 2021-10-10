const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const twilio = require("twilio");
require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);
const mongoUri = process.env.MONGO_URI;

let messageSchema = new mongoose.Schema({
  phoneNumber: String,
  groupName: String,
  totalAdults: String,
  totalKids: String,
});

let Message = mongoose.model("Message", messageSchema)

app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongodb is connected");
  }
);

app.get("/", (req, res) => {
    res.send('God is good')
//   res.end();
});

app.post('/inbound', (req, res) => {
  let from = req.body.From;
  let to = req.body.To;
  let body = req.body.Body;

  Message.find({ phoneNumber: from }, (err, message) => {
    if (message.length !== 0) {
      // continue conversation
      console.log('>>-------->one')
      if (!message[0].groupName && !message[0].totalAdults && !message[0].totalKids) {
        console.log('>>------------>updating')
        Message.findByIdAndUpdate(message[0]._id, { "$set": { groupName: body }}, { "new": true, "upsert": true });
        console.log('>>------------>updated')
        client.messages.create({
          to: `${from}`,
          from: `${to}`,
          body: 'How many adults are in your group?'
        });

        res.end();
      }
      else if (!message[0].totalAdults && !message[0].totalKids) {
        Message.findByIdAndUpdate(message[0]._id, { "$set": { totalAdults: body }}, { "new": true, "upsert": true });
        console.log(body);
        client.messages.create({
          to: `${from}`,
          from: `${to}`,
          body: 'How many kids are in your group?'
        });

        res.end();
      }
    } else {
      if (body === 'RSVP') {
        let newMessage = new Message();
        newMessage.phoneNumber = from;

        newMessage.save(() => {
          client.messages.create({
            to: `${from}`,
            from: `${to}`,
            body: 'What is your group name?'
          });

          res.end();
        })
      } 
      // else {
      //   newMessage.save(() => {
      //     client.messages.create({
      //       to: `${from}`,
      //       from: `${to}`,
      //       body: 'Please enter RSVP!!!'
      //     });

      //     res.end();
      //   })
      // }
    }
  });

  res.end();
})

app.listen(3000, () => {
  console.log("server connected on port 3000");
});
// (312) 634-6804
// +13126346804
