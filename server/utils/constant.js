import { config } from "dotenv";

config();
export const database = process.env.MONGODB_URL;
