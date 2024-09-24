const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectToDb = require("./db");
const todoRouter = require("./routes/todoRouter")
connectToDb()


app.get("/", (req, res) => {
  res.send("Welcome to Todo list");
});

app.use(express.json())
app.use('/api', todoRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
