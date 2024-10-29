const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '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' });

module.exports = async (req, res) => {
  if (req.method === 'POST') {
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
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
