const express = require('express');
const Groq = require('groq-sdk');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({
  origin: 'https://vamos-eight.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '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' });

try {
  app.options('/chat', cors());
  app.post('/chat', async (req, res) => {
    const { message } = req.body;
  
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        model: "llama3-8b-8192", 
      });
  
      res.json(chatCompletion.choices[0]?.message?.content || "No response from Groq");
  
    } catch (error) {
      console.error('Error calling Groq API:', error);
      res.status(500).send('Error calling Groq API');
    }
  });
} catch (error) {
  console.error('Error:', error);
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
