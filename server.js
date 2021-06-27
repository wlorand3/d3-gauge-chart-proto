/**
 * File: server.js
 * Desc: simple express server
 */

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3009;

const app = express();

// serve static files
app.use(express.static("./client/src"));

// simple static api to serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/src/"));
});

// listen
app.listen(PORT, () => {
  console.log(`express server started and running on port ${PORT}`);
});
