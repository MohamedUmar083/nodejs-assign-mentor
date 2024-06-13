import express from "express";
import {
  assignStudent,
  createMentor,
  mentorStudent,
  showMentor,
} from "../Controllers/mentorController.js";

const router = express.Router();

router.post("/create/mentor", createMentor);
router.get("/show/mentor", showMentor);
router.put("/assign/student/:id", assignStudent);
router.get("/mentor/student/:id", mentorStudent);

export default router;
