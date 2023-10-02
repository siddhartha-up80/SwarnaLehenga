const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: String, required: true },
      },
    ], 
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending", required: true },
  },
  { timestamps: true }
);

let Order;

try {
  // Try to get the existing model, or create a new one if it doesn't exist
  Order = mongoose.model("Orders");
} catch (error) {
  // If the model doesn't exist, create it
  Order = mongoose.model("Orders", OrderSchema);
}

export default Order;