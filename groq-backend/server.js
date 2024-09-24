const express = require('express');
const Groq = require('groq-sdk');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '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' });

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
