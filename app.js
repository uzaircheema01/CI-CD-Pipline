// app.js

const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Simple Website!</h1>');
});

// Another simple route
app.get('/about', (req, res) => {
  res.send('<h2>About This Website</h2><p>This is a simple website built with Node.js and Express.</p>');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
