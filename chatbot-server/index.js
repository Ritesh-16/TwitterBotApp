// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.REACT_APP_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

app.post('/api/generate-tweet', async (req, res) => {
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Convert this message into a concise tweet-style response you should not say nonsense but give a response in tweet-style(max 280 characters): "${message}"`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ tweet: text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate tweet' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});