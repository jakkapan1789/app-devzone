// register.js
import speakeasy from "speakeasy";
import qrcode from "qrcode";
import { addUser } from "@/data/userStore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username } = req.body;
    const secret = speakeasy.generateSecret({ length: 20 });

    addUser(username, secret.base32); // Store user

    const label = `MyApp:${username}`;
    const otpauthUrl = `otpauth://totp/${label}?secret=${secret.base32}&issuer=app.devzone`;

    try {
      const dataUrl = await qrcode.toDataURL(otpauthUrl);
      res.status(200).json({
        secret: secret.base32,
        qrCode: dataUrl,
      });
    } catch (err) {
      res.status(500).json({ error: "Failed to generate QR code" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
