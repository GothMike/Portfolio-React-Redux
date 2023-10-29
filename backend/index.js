const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 3001;

app.use(express.json());

app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/send-mail", (req, res) => {
  const { email, name, subject, text } = req.body;
  console.log(req);
  console.log(res);

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Новое сообщение от ${subject}`,
    text: `Имя: ${name}\nEmail: ${email}\nКомпания: ${subject}\nСообщение: ${text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Письмо не отправлено");
    } else {
      console.log("Письмо отправлено: " + info.response);
      res.status(200).send("Письмо успешно отправлено");
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
