// File: calculator.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("calculator");
});

router.get("/addition", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 + num2;
  res.render("result", { operation: "Addition", num1, num2, result });
});

router.get("/subtraction", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;
  res.render("result", { operation: "Subtraction", num1, num2, result });
});

router.get("/multiplication", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 * num2;
  res.render("result", { operation: "Multiplication", num1, num2, result });
});

router.get("/division", (req, res, next) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (num2 === 0) {
    const err = new Error("Cannot divide by zero");
    err.status = 400;
    next(err);
  } else {
    const result = num1 / num2;
    res.render("result", { operation: "Division", num1, num2, result });
  }
});

router.get("/modulus", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 % num2;
  res.render("result", { operation: "Modulus", num1, num2, result });
});

module.exports = router;
