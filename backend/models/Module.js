import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  // A required reference to the parent Course document.
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  // An array of ObjectIds, each referencing a Lesson document.
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }]
}, {
  timestamps: true
});

const Module = mongoose.model('Module', moduleSchema);
export default Module;