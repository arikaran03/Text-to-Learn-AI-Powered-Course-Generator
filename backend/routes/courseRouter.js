import express from 'express';
import { createCourse, getUserCourses, getCourseById } from '../controllers/courseController.js';
import checkJwt from '../middlewares/authMiddleware.js'; // Assuming auth middleware is ESM compatible

const router = express.Router();

// All these routes are protected and require a valid JWT.
router.route('/')
    .post(checkJwt, createCourse)
    .get(checkJwt, getUserCourses);

router.route('/:id')
    .get(checkJwt, getCourseById);

export default router;