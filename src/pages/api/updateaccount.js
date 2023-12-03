import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, phone, address } = req.body;

    try {
      // Find the user by email
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update user fields
      existingUser.name = name || existingUser.name;
      existingUser.password =
        CryptoJS.AES.encrypt(req.body.password, "secret123").toString() ||
        existingUser.password;
      existingUser.phone = phone || existingUser.phone;
      existingUser.address = address || existingUser.address;

      // Save the updated user to the database
      await existingUser.save();

      res.status(200).json({ success: "User updated successfully" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
