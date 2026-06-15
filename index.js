import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS so our frontend can access this API safely
app.use(cors());
app.use(express.json());

// In-memory tasks mock database array
let tasks = [
  { id: 1, title: "Complete Module 14 Cloud Assignment 🚀", completed: true },
  { id: 2, title: "Review React Project Architecture 🧠", completed: false }
];

// 1. GET Route to fetch all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// 2. POST Route to add a new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Task title cannot be empty!" });
  }
  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: false
  };
  tasks.unshift(newTask); // New tasks top par dikhane ke liye
  res.status(201).json(newTask);
});

// Production Port allocation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running live on port ${PORT}`);
});
