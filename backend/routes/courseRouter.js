import express from 'express';
import checkJwt from '../middlewares/authMiddleware.js';



const router = express.Router();

// This is a public route
router.get('/public', (req, res) => {
    res.json({
        message: "This is a public endpoint. Anyone can access this."
    });
});

// This is a protected route.
// The 'checkJwt' middleware will run before the route handler.
// If the token is valid, it will attach the user's details to req.auth.

// for checking purpose, i've added a simple course list
router.get('/courses', checkJwt, (req, res) => {
  // At this point, the token is validated.
  // The user's identifier (sub) is available in req.auth.payload.sub
  console.log('Authenticated user:', req.auth.payload);

  
  res.json([
    { id: 1, title: 'Introduction to React (Protected)' },
    { id: 2, title: 'Advanced Node.js (Protected)' },
    { id: 3, title: 'Securing APIs with Auth0 (Protected)' }
  ]);
});

export default router;