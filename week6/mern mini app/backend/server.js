import 'dotenv/config';
import exp from 'express'
import {connect} from 'mongoose'
import { employeeApp } from './API/Employeeapi.js';
import cors from 'cors'

const app=exp()

// Robust CORS configuration
const allowedOrigins = [
  "https://mern-mini-app1.vercel.app", 
  "https://mern-mini-app.vercel.app",
  "https://mini-mern-app.vercel.app","https://mern-mini-app-bmir.vercel.app/"
];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS: ", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(exp.json());

// Routes
app.use('/employee-api', employeeApp);

app.get("/", (req, res) => {
  res.json({ 
    status: "success", 
    message: "Backend is running successfully!",
    db_connected: true 
  });
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

const port = process.env.PORT || 4000;
const mongoUrl = process.env.DB_URL;

async function connectDB(){
    if (!mongoUrl) {
        console.error("FATAL ERROR: DB_URL environment variable is missing!");
        process.exit(1);
    }

    try {
        console.log("Attempting to connect to MongoDB...");
        await connect(mongoUrl);
        console.log("Database connection successful");

        app.listen(port, () => console.log(`Server running on port ${port}..`));
    }
    catch(err) {
        console.error("Error in DB connection:", err.message);
        process.exit(1);
    }
}
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err.stack);
    res.status(err.status || 500).json({
        message: "An error occurred",
        error: err.message
    });
});
