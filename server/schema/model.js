import mongoose from "mongoose";
import courseSchema from "./coursesSchema.js";

export const Course = mongoose.model("Course", courseSchema);
