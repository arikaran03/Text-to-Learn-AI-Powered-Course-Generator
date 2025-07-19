import express from 'express';
import { syncUser } from '../controllers/userController.js';
import checkJwt from '../middlewares/authMiddleware.js'; // Assuming auth middleware is ESM compatible

const router = express.Router();

// This route will be called by the frontend after a user logs in
// to ensure their profile exists in our database.
router.post('/sync', checkJwt, syncUser);

export default router;