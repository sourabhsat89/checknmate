import { createTransport } from 'nodemailer';

// Create SMTP transporter object
let transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'paultrisha493@gmail.com',
    pass: 'Checkmate@24'
  }
});

// Define mail options
let mailOptions = {
  from: 'paultrisha493@gmail.com',
  to: 'sourabhsat89@gmail.com',
  subject: 'Test mail from Node.js',
  text: 'Hello, this is a test mail from Node.js!'
};

// Send mail using transporter
transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  }else{
    console.log('Email sent: ' + info.response);
  }
});