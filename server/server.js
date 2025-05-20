require("dotenv").config(); // Load env vars
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.set("trust proxy", 1); // For reverse proxy (Nginx)

// Routes
app.use("/api", require("./routes/record"));

// Optional: Fallback for SPA (if not using Nginx for static files)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// MongoDB Connection
const dbo = require("./db/conn");
dbo.connectToMongoDB(function (error) {
  if (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit on DB failure
  }

  app.listen(port, () => {
    console.log(`✅ Server is running on port: ${port}`);
  });
});