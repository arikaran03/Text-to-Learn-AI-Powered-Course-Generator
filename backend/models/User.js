import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // The 'sub' field from the Auth0 JWT token. This is the unique identifier for the user.
  auth0Id: {
    type: String,
    required: true,
    unique: true,
  },
  // A reference to all the courses created by this user.
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  // You can add other user-specific details here if needed, e.g., name, email.
  email: {
      type: String,
      required: true,
      unique: true,
  },
  name: String,
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);
export default User;