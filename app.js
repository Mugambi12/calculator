const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set up static files directory
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("calculator");
});

app.get("/addition", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 + num2;
  res.send({ result });
});

app.get("/subtraction", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;
  res.send({ result });
});

app.get("/multiplication", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 * num2;
  res.send({ result });
});

app.get("/division", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (num2 === 0) {
    res.status(400).send({ error: "Cannot divide by zero" });
  } else {
    const result = num1 / num2;
    res.send({ result });
  }
});

app.get("/modulus", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 % num2;
  res.send({ result });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
