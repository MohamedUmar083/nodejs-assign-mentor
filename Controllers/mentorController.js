import Mentor from "../Models/mentorSchema.js";

export const createMentor = async (req, res) => {
  try {
    const newMentor = new Mentor(req.body);
    await newMentor.save();
    res
      .status(200)
      .send({ Message: "New Mentor Added Successfully", data: [newMentor] });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Create Method" });
  }
};

export const showMentor = async (req, res) => {
  try {
    const mentor = await Mentor.find();
    res
      .status(200)
      .send({ Message: "Data Fetched Successfully", Data: mentor });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Show Method" });
  }
};

export const assignStudent = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const { student } = req.body;

    await Mentor.updateOne({ _id: mentorId }, { student });

    const data = await Mentor.find({ _id: mentorId });

    res
      .status(200)
      .send({ Message: "Student Updated in Mentor Successfully", Data: data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Put Method" });
  }
};

export const mentorStudent = async (req, res) => {
  try {
    const mentorId = req.params.id;

    const student = await Mentor.find({ _id: mentorId }).populate("student");
    res.status(200).send({ Students: student });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Internal Server Error in Get Method" });
  }
};
