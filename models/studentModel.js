import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },

  registrationNumber: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    required: true
  }
});

export const Student = mongoose.model('Student', studentSchema);