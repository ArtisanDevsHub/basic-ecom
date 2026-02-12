require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const { mongooseConnect } = require("./src/config/dbConnection/db");


const port = process.env.PORT;

mongooseConnect();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());



app.get("/api/message", (req, res) => {
  res.json({ text: "Backend connected successfully!" });
});



// Auth Routes
require('./src/routes')(app)

app.listen(port, () => {
  console.log(`Server has started on port ${port} `);
});
