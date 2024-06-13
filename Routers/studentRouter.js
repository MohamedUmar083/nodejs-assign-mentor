import express from "express";
import {
  assignMentor,
  changeMentor,
  createStudent,
  showStudent,
  studentMentor,
} from "../Controllers/studentController.js";

const router = express.Router();

router.post("/create/student", createStudent);
router.get("/show/student", showStudent);
router.post("/assign/mentor/:id", assignMentor);
router.put("/change/mentor/:id", changeMentor);
router.get("/student/prevmentor/:id", studentMentor);

export default router;
