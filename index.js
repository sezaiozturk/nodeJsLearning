const express = require("express");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

/*app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res) => {
  console.log("middleware 2");
  res.send("<h1>Middleware</h1>");
});*/

/*app.use("/about/:aboutid/users/:username", (req, res) => {
  console.log(req.params);
  res.send("<h1>about details</h1>");
});
app.use("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});
app.use("/", (req, res) => {
  res.send("<h1>home page</h1>");
});
*/
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
