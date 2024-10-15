import { Router } from "express";
import {
  createCourseController,
  getAllCourseController,
} from "../controller/courseController.js";

let courseRouter = Router();
courseRouter.route("/create").post(createCourseController);
courseRouter.route("/readall").get(getAllCourseController);
export default courseRouter;
