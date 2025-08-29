const app = require("./index");

// Use 3000 for local testing OR the port Vercel gives in production
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
