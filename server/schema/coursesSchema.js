import mongoose from "mongoose";

let courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "CourseName is required"],
  },
  level: {
    type: String,
    required: [true, "Level is required"],
  },
  courseDescription: {
    type: String,
    required: [true, "Course Description is required"],
  },
  instructor: {
    type: String,
    required: [true, "Instructor is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

export default courseSchema;
