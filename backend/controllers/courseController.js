import { Course, Module, Lesson } from '../models/index.js';

// @desc   Create a new course
// @route  POST /api/courses
// @access Private
export const createCourse = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const creator = req.auth.payload.sub; // Auth0 user ID from the token

    if (!title) {
        return res.status(400).json({ message: 'Title is required.' });
    }

    const newCourse = new Course({
      title,
      description,
      creator,
      tags,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Server error while creating course.' });
  }
};

// @desc   Get all courses for the logged-in user
// @route  GET /api/courses
// @access Private
export const getUserCourses = async (req, res) => {
  try {
    const creator = req.auth.payload.sub;
    const courses = await Course.find({ creator });
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching user courses:', error);
    res.status(500).json({ message: 'Server error while fetching courses.' });
  }
};

// @desc   Get a single course by its ID, populated with modules and lessons
// @route  GET /api/courses/:id
// @access Private
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate({
                path: 'modules',
                populate: {
                    path: 'lessons',
                    model: 'Lesson'
                }
            });

        if (!course) {
            return res.status(404).json({ message: 'Course not found.' });
        }

        // Optional: Check if the requester is the creator of the course
        if (course.creator !== req.auth.payload.sub) {
            return res.status(403).json({ message: 'User not authorized to view this course.' });
        }

        res.status(200).json(course);
    } catch (error) {
        console.error('Error fetching course by ID:', error);
        res.status(500).json({ message: 'Server error while fetching course.' });
    }
};