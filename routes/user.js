const express = require("express");

const router = express.Router();
const db = require("../data/db");

const data = {
  title: "Populer Kurslar",
};
router.use("/blogs/:blogid", (req, res) => {
  res.render("users/blog-details");
});
router.use("/blogs", async (req, res) => {
  const [blogs] = await db.query("select * from blogs where home=0");
  const [categories] = await db.query("select * from categories");
  res.render("users/blogs", {
    title: "Populer Kurslar",
    categories: categories,
    cards: blogs,
  });
});
router.use("/", async (req, res) => {
  const [blogs] = await db.query("select * from blogs where home=1");
  const [categories] = await db.query("select * from categories");
  res.render("users/index", {
    title: "Populer Kurslar",
    categories: categories,
    cards: blogs,
  });
});

module.exports = router;
