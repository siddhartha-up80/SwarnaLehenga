// pages/api/energyData.js
import Energy from "@/models/Energy";
import { connectToDB } from "@/utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { voltage, current, power, energy } = req.body;

      // Process the incoming data as needed
      console.log("Received data from ESP32:");
      console.log(
        `Voltage: ${voltage}V, Current: ${current}A, Power: ${power}W, Energy: ${energy}kWh`
      );

      // You can store the data in a database, perform additional calculations, etc.
      await connectToDB();

      const energydata = new Energy({
        voltage,
        current,
        power,
        energy,
      });
  
      await energydata.save();

      // Respond with a success message
      res.status(200).json({ message: "Data received successfully" });
    } catch (error) {
      console.error("Error processing data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Return a method not allowed error for non-POST requests
    res.status(405).json({ error: "Method Not Allowed" });
  }
}