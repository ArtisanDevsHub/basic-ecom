require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const { mongooseConnect } = require("./src/config/dbConnection/db");
// const session = require("express-session");

const port = 3000;

mongooseConnect();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.get("/api/message", (req, res) => {
  res.json({ text: "Backend connected successfully!" });
});


app.listen(port, () => {
  console.log(`Server has started on port ${port} `);
});
