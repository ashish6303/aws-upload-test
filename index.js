import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Another route
app.get('/name', (req, res) => {
    res.send('My name is Ashish Prakash Singh. I am a software engineer.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
