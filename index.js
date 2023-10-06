const express = require("express");
const app = express();

app.use((req, res) => {
  res.end("hello nodemon");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
