import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String },
  prementor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
    default: null,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
    default: null,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
