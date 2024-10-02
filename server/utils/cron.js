const cron = require('node-cron');
const sendEmail = require('./mailSender');

cron.schedule('0 0 * * 0', () => {  
  console.log('Sending registration success email...');
  sendEmail();
  console.log('Registration success email sent.');
});