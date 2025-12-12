const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Syed Maaz",
    content: "Data Science",
  },
  {
    username: "Salman Khan",
    content: "Megastar",
  },
  {
    username: "Roman Reigns",
    content: "WWE",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.listen(port, () => {
  console.log("Listening to port: " + port);
});
