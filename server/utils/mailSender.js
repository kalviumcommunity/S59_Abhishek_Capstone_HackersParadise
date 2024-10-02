const nodemailer = require('nodemailer');
require('dotenv').config();
const mailSender = async (email, title, body) => {
  try {
      let transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: 587,
          secure: false,
          auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.USER_PASS
          }
      })
      let info = await transporter.sendMail({
          from: process.env.USER_EMAIL,
          to: email,
          subject: title,
          html: body
      })
      console.log("Email info:", info)
      return info
  }
  catch (error) {
      console.log("Error occured sending the mail", error)
  }
}

module.exports = mailSender