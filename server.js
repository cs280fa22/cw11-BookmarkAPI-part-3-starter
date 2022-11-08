import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Bookmark API!");
})

app.listen(PORT, () => {
  console.log(`Bookmark API at http://localhost:${PORT}/`)
})