import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  // The Auth0 'sub' of the user who created the course.
  creator: {
    type: String,
    required: true
  },
  // An array of ObjectIds, each referencing a Module document.
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }],
  // Tags for categorizing and searching for courses.
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);
export default Course;