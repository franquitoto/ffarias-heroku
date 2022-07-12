import config from "./config";
import nodemailer from 'nodemailer';
import path from 'path';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.GMAIL_EMAIL,
      pass: config.GMAIL_PASSWORD // naturally, replace both with your real credentials or an application-specific password
    }
  });

  export const enviarEmail = (destino, asunto, text) => {
    const mailOptions = {
        from: 'Franquillo el loco',
        to: destino,
        subject: asunto,
        text: text,
      };
    transporter.sendMail(mailOptions, (error, info) =>{
        if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
    })
  }



