const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "jfl",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing"
    },
    {
      title: "dsçpf",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse maiores quasi similique laudantium sit"
    },
    {
      title: "euro",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse maiores quasi similique laudantium sit est numquam voluptas vero blanditiis laboriosam saepe incidunt"
    },
    {
      title: "diie",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse maiores quasi similique laudantium sit est numquam voluptas vero blanditiis laboriosam saepe incidunt ab, consequuntur voluptatibus! Non doloribus nesciunt cum!"
    }
  ];
  res.render("pages/index", {
    qualitys: items,
  });
})

app.get("/sobre", function (req, res) {
  res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");

