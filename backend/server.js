import express from 'express';
import cors from 'cors'; 
import courseRoutes from "./routes/courseRouter.js"; 
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const FRONT_END_URL = process.env.FRONTEND_URL;


// Middleware
// Use CORS to allow requests from your React frontend
app.use(cors({ origin: FRONT_END_URL })); // Adjust for your frontend URL
app.use(express.json());

// Routes
app.use('/api', courseRoutes);

// A simple base route
app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});