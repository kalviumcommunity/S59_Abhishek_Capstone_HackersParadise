const cron = require('node-cron');
const sendEmail = require('./email');

cron.schedule('* * * * *', () => {  
  console.log('Sending registration success email...');
  sendEmail();
  console.log('Registration success email sent.');
});