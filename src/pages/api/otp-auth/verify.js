// verify.js
import speakeasy from "speakeasy";
import { getUser } from "@/data/userStore";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, token } = req.body;
    const user = getUser(username); // Retrieve user
    console.log("user", user);

    if (!user) {
      return res.status(400).json({ verified: false, acc: user });
    }

    const verified = speakeasy.totp.verify({
      secret: user.secret,
      encoding: "base32",
      token: token,
      // window: 1,
    });

    return res.json({ verified });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
