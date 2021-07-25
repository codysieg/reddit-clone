import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "albztgu7dkcxbqnm@ethereal.email", // generated ethereal user
      pass: "kcsxZg43Ht6UDqCSWj", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"codysiegmann09@gmail.com', // sender address
    to: options.to, // list of receivers
    subject: options.subject, // Subject line
    html: options.html,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
