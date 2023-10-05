import mongoose from "mongoose";
import Order from "../../models/Order"; // Adjust the import path as per your project structure

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, address, products, amount } = req.body;

      // Create a new order instance
      const order = new Order({
        email,
        address,
        products,
        amount,
      });

      // Save the order to the database
      await order.save();

      res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
      console.error("Error placing order", error); // Log the error
      res
        .status(500)
        .json({ message: "Error placing order", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
