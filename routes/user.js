const express = require("express");

const router = express.Router();

const data = {
  title: "Populer Kurslar",
  categories: [
    "Web Geliştirme",
    "Mobil Uygulamalar",
    "Veri Analizi",
    "Programlama",
    "Deneme",
  ],
  cards: [
    {
      photoUrl: "/static/images/2.jpeg",
      title: "Python ile Sıfırdan İleri Seviye Python Programlama",
      content:
        "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,VeriAnalizi,Bot Yazımı,Web Geliştirme(Django)",
      home: true,
    },
    {
      photoUrl: "/static/images/1.jpeg",
      title: "Komple Uygulamalı Web Geliştirme",
      content:
        "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass,Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.NetMvc&Core Mvc",
      home: true,
    },
    {
      photoUrl: "/static/images/3.jpeg",
      title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
      content:
        " Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular,React ve VueJs için sağlam bir temel oluşturun.",
      home: true,
    },
    {
      photoUrl: "/static/images/3.jpeg",
      title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
      content:
        " Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular,React ve VueJs için sağlam bir temel oluşturun.",
      home: false,
    },
    {
      photoUrl: "/static/images/3.jpeg",
      title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
      content:
        " Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular,React ve VueJs için sağlam bir temel oluşturun.",
      home: false,
    },
    {
      photoUrl: "/static/images/3.jpeg",
      title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
      content:
        " Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular,React ve VueJs için sağlam bir temel oluşturun.",
      home: false,
    },
  ],
};
router.use("/blogs/:blogid", (req, res) => {
  res.render("users/blog-details");
});
router.use("/blogs", (req, res) => {
  res.render("users/blogs", data);
});
router.use("/", (req, res) => {
  res.render("users/index", data);
});

module.exports = router;
