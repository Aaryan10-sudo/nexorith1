import { Course } from "../schema/model.js";

export const createCourseController = async (req, res, next) => {
  try {
    let result = await Course.create(req.body);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllCourseController = async (req, res, next) => {
  try {
    let result = await Course.find();
    res.json({
      success: true,
      message: "Courses fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
