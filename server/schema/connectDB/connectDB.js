import mongoose from "mongoose";
import { database } from "../../utils/constant.js";
let connectDB = () => {
  mongoose.connect(database);
  console.log(`Connected to database`);
};

export default connectDB;
