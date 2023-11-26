// pages/api/orders/[email].js
import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";

export default async function handler(req, res) {
  await connectDb();

  const { email } = req.query;

  try {
    const orders = await Order.find({ email });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
