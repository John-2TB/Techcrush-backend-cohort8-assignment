import { asyncHandler } from "../utils/asyncHandler.js";
import { createStudent, deleteStudent, getStudent, updateStudent } from "../services/studentService.js";


export const createStudentController = asyncHandler(
  async (req, res) => {
    const newStudent = await createStudent(req.body);

    res.status(201).json({
      message: "Student created successfully",
      data: newStudent
    });
  }
);


export const updateStudentController = asyncHandler(
  async (req, res) => {
    const updatedStudent = await updateStudent(req.params.studentId, req.body);

    res.status(200).json({
      message: 'Student updated successfully',
      data: updatedStudent
    });
  }
);

export const getStudentController = asyncHandler(
  async (req, res) => {
    const student = await getStudent(req.params.studentId);

    res.status(200).json({
      message: 'Student found',
      data: student
    });
  }
);


export const deleteStudentController = asyncHandler(
  async (req, res) => {
    const deletedStudent = await deleteStudent(req.params.studentId);

    res.status(200).json({
      message: 'Student deleted successfully',
      data: deletedStudent
    });
  }
);