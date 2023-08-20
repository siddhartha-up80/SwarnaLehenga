import mongoose from "mongoose";

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority"
  );
  return handler(req, res);
};

export default connectDb;
 