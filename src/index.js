const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const connectDb = require("./db/index");

dotenv.config();
const app = express();

connectDb();

app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hii from the Server.");
});

app.listen(PORT, () => {
  console.log("THE SERVER IS UP AND RUNNIN ON PORT: ", PORT);
});
