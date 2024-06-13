import Student from "../Models/studentSchema.js";

export const createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res
      .status(200)
      .send({ Message: "New Student Added Successfully", data: [newStudent] });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Create Method" });
  }
};

export const showStudent = async (req, res) => {
  try {
    const student = await Student.find();

    res
      .status(200)
      .send({ Message: "Data Fetched Successfully", Data: student });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Show Method" });
  }
};

export const assignMentor = async (req, res) => {
  try {
    const studentid = req.params.id;
    const { mentor } = req.body;

    const result = await Student.updateOne({ _id: studentid }, { mentor });

    if (result.matchedCount == 0) {
      res.status(404).send({ Message: "Student Not Found" });
    }

    const data = await Student.find({ _id: studentid });

    res
      .status(200)
      .send({ Message: "Student Updated Successfully", Data: data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Post Method" });
  }
};

export const changeMentor = async (req, res) => {
  try {
    const studentid = req.params.id;
    const student = await Student.findById(studentid);
    const { mentor } = req.body;

    if (student.prementor == null) {
      const prementor = student.mentor;
      await Student.updateOne({ _id: studentid }, { prementor });
      const result = await Student.updateOne({ _id: studentid }, { mentor });
      if (result.matchedCount == 0) {
        res.status(404).send({ Message: "Student Not Found" });
      }
    }

    const data = await Student.find({ _id: studentid });

    res
      .status(200)
      .send({ Message: "Student Updated Successfully", Data: data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Post Method" });
  }
};

export const studentMentor = async (req, res) => {
  try {
    const studentId = req.params.id;

    const prementor = await Student.find({ _id: studentId }).populate(
      "prementor"
    );
    res.status(200).send({ Mentor: prementor });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Get Method" });
  }
};
