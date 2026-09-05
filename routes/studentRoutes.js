import express from 'express';
import { createStudentController, deleteStudentController, getStudentController, updateStudentController } from '../controller/studentController.js';


const router = express.Router();

// ============================
// POST
// ============================
router.post('/', createStudentController);

// ============================
// GET
// ============================
router.get('/:studentId', getStudentController);

// ============================
// PATCH
// ============================
router.patch('/:studentId', updateStudentController);

// ============================
// DELETE
// ============================
router.delete('/:studentId', deleteStudentController);







export default router;