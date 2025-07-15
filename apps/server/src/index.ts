import "dotenv/config";
import express from "express";
import { db, _dummy } from "database";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/dummy", async (req, res) => {
  const dummy = await db.select().from(_dummy);
  res.json(dummy);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
