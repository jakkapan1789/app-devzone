import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Contact form submission from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
