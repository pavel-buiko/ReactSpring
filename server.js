const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.get("/api/test", (_, res) => {
  res.json({ message: "Server connected to frontend" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
