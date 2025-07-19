import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  // The content of the lesson is stored as an array of mixed types.
  content: {
    type: [mongoose.Schema.Types.Mixed],
    required: true
  },
  // A flag to indicate whether the lesson content has been enhanced by an AI service.
  isEnriched: {
    type: Boolean,
    default: false
  },
  // A reference to the parent Module document.
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  }
}, {
  timestamps: true
});

const Lesson = mongoose.model('Lesson', lessonSchema);
export default Lesson;
