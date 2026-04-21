import express from "express";
import Sentiment from "sentiment";
import cors from "cors";

const app = express();
const sentiment = new Sentiment();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const text = req.body.text;

  const result = sentiment.analyze(text);

  let label = "Neutral";
  if (result.score > 0) label = "Positive";
  if (result.score < 0) label = "Negative";

  res.json({
    score: result.score,
    label: label,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});