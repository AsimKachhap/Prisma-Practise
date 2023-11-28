const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hii from the Server.");
});

app.listen(PORT, () => {
  console.log("THE SERVER IS UP AND RUNNIN ON PORT: ", PORT);
});
