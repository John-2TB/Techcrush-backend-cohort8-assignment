import { Student } from "../models/studentModel.js";
import { AppError } from "../errors/AppError.js";
import mongoose from "mongoose";

// Create student
export const createStudent = async (studentData) => {
  const {
    name,
    registrationNumber,
    email
  } = studentData

  if (
    typeof name !== 'string' ||
    name.trim().length === 0 ||
    typeof registrationNumber !== 'string' ||
    registrationNumber.trim().length === 0 ||
    typeof email !== 'string' ||
    email.trim().length === 0
  ) {
    throw new AppError('Invalid data format', 400);
  }

  const newStudent = Student.create(studentData);

  return newStudent;
};

// Update student
export const updateStudent = async (studentId, studentData) => {
  const existingStudent = await Student.findById(studentId)

  if (!existingStudent) {
    throw new AppError('Student not found', 404)
  }

  const { name } = studentData;

  if (
    typeof name !== 'string' ||
    name.trim().length === 0
  ) {
    throw new AppError('Invalid student data', 400);
  }

  const updateData = {
    ...studentData
  }
  
  const updatedStudent = await Student.findByIdAndUpdate(
    studentId,
    updateData,
    {new: true}
  );

  return updatedStudent;

};


// GET student
export const getStudent = async (studentId) => {
  if (!mongoose.isValidObjectId(studentId)) {
    throw new AppError('Invalid student ID', 400);
  }

  const existingStudent = await Student.findById(studentId);

  if (!existingStudent) {
    throw new AppError('Student not found', 404);
  }

  return existingStudent;
};


// DELETE student
export const deleteStudent = async (studentId) => {
  if (!mongoose.isValidObjectId(studentId)) {
    throw new AppError('Invalid student ID', 400);
  }

  const deletedStudent = await Student.findByIdAndDelete(studentId);

  return deletedStudent;
};