const express = require("express");
const app = express();

/*app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res) => {
  console.log("middleware 2");
  res.send("<h1>Middleware</h1>");
});*/

app.use("/about/:aboutid/users/:username", (req, res) => {
  console.log(req.params);
  res.send("<h1>about details</h1>");
});
app.use("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});
app.use("/", (req, res) => {
  res.send("<h1>home page</h1>");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
