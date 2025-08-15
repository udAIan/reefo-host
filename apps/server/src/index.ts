import "dotenv/config";
import express from "express";
import { db, _dummy } from "database";
import { FE_BE_UTILS } from "fe-be-utils";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello World ${FE_BE_UTILS}`);
});

app.get("/dummy", async (req, res) => {
  const dummy = await db.select().from(_dummy);
  res.json(dummy);
});
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
