const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path"); // Needed to serve React files
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app (after Docker build)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// API Routes
app.use(require("./routes/record"));

// Fallback route to serve React app (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start server after MongoDB connection
const dbo = require("./db/conn");
dbo.connectToMongoDB(function (error) {
  if (error) throw error;
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
});