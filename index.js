import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello this is integration of jenkins');
});

// Another route
app.get('/name', (req, res) => {
    res.send('My name is Ashish Prakash Singh. I am a software engineer.');
});

// Start the server, binding to all interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
