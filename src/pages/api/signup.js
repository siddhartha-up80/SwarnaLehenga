import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    
    let u = new User(req.body)
    await u.save()

    res.status(200).json([{ sucess: "success" }]);
  } else {
    res.status(404).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
