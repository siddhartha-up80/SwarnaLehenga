import { Schema, model, models } from "mongoose";

const EnergySchema = new Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  voltage: {
    type: String,
  },
  current: {
    type: String,
  },
  power: {
    type: String,
  },
  energy: {
    type: String,
  },
});

const Energy = models.Energy || model("Energy", EnergySchema);

export default Energy;
