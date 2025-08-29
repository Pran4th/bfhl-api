const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (/^-?\d+$/.test(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item.toString());
        } else {
          odd_numbers.push(item.toString());
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const concatString = alphabets
      .join("")
      .split("")
      .reverse()
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    return res.json({
      is_success: true,
      user_id: "john_doe_17091999",       // placeholder
      email: "john@xyz.com",               // placeholder
      roll_number: "ABCD123",              // placeholder
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: concatString
    });
  } catch (err) {
    return res.status(500).json({ is_success: false, message: err.message });
  }
});

module.exports = app;
