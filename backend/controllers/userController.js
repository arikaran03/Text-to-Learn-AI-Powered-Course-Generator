import { User } from '../models/index.js';

// @desc   Get current user or create if they don't exist
// @route  POST /api/users/sync
// @access Private
export const syncUser = async (req, res) => {
  try {
    const { sub: auth0Id, email, name } = req.auth.payload;

    // Find user by their Auth0 ID
    let user = await User.findOne({ auth0Id });

    // If user doesn't exist, create a new one
    if (!user) {
      user = new User({
        auth0Id,
        email,
        name,
      });
      await user.save();
      console.log(`New user created: ${email}`);
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error in user sync:', error);
    res.status(500).json({ message: 'Server error during user synchronization.' });
  }
};