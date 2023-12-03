import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email } = req.body;
    const phone = "phone";
    const address = "address";
    let u = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString(),
      phone,
      address,
    });
    await u.save();

    res.status(200).json([{ sucess: "success" }]);
  } else {
    res.status(404).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
