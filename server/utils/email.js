const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = () => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'abhishek.kaundal0052@gmail.com',
    subject: 'Start Learning Now!!', 
    text: 'Hey Ethical hacker, start your journey by exploring our modules and practice your skills through bug bounties.',
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error sending email:', error);
    }
    console.log('Email sent successfully:', info.response);
  });
};

module.exports = sendEmail;