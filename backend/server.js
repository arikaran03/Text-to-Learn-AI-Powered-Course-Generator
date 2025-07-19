import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRouter.js'; 


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const FRONT_END_URL = process.env.FRONTEND_URL;

// Connect to MongoDB
connectDB();

// Middleware
// Use CORS to allow requests from your React frontend
const allowedOrigins = [
  "https://45vz631c-5173.inc1.devtunnels.ms"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);


// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});