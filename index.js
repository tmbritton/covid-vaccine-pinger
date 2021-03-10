const fs = require('fs');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFromNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);
const interval = 10000; // 10 seconds

// Vaccine providers
const heb = require('./providers/heb');

const providersList = [];

providersList.push(heb);

const sendSms = (number, body) => {
  client.messages
  .create({
     body: body,
     from: `+1${twilioFromNumber}`,
     to: `+1${number}`
   })
  .then(message => console.log(message));
}

const inform = (message, smsList) => {
  if (message) {
    smsList.forEach(number => {
      sendSms(number, message);
    })
  } else {
    console.log(`${new Date(Date.now()).toUTCString()}: No updates`);
  }
  console.log(message);
}

const intervalCallback = () => {
  fs.readFile('smsNumbers.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      const smsList = JSON.parse(data);
      providersList.forEach(provider => {
        provider.fetch()
          .then(data => provider.parse(data))
          .then(message => inform(message, smsList))
          .catch(error => console.error(error));
      });
    }
  })
}

intervalCallback(); // Execute immediately
setInterval(intervalCallback, interval); // Then repeat every interval
