import nodemailer from "nodemailer";

export async function sendEmail (to,subject,html){

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "mohammad672001@gmail.com",
      pass: "emrt ctcd nhzn cdvq",
    },
  });

  const info = await transporter.sendMail({
    from: '"welcom 👻" <mohammad672001@gmail.com>', // sender address
    to: to, // list of receivers
    subject, // Subject line
    html, // html body
  });


}
