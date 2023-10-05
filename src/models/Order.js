import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  email: String,
  address: String,
  products: [
    {
      productId: String,
      quantity: Number,
    },
  ],
  amount: Number,
});

// Register the model with Mongoose
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
