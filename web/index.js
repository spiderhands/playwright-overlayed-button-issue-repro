// Minimal Express server to serve index.html
// Run this file with: node web/index.js

// Import the express module
const express = require("express");
const path = require("path");

// Create an Express application
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Serve static files from the 'web' directory
app.use(express.static(path.join(__dirname)));

// Route for the root URL to serve index.html
app.get("/", (req, res) => {
  // Send the index.html file
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
