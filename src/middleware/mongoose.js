import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return handler(req, res);
};

export default connectDb;

// db.js
// import mongoose from "mongoose";

// async function connectDb() {
//   if (mongoose.connections[0].readyState) {
//       console.log("Using existing database connection");
//     // Use existing database connection
//     return;
//   }

//   try {
//     // Connect to the MongoDB database
//     await mongoose.connect(
//       "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// export default connectDb;
