const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Syed Maaz",
    content: "Data Science",
  },
  {
    id: uuidv4(),
    username: "Salman Khan",
    content: "Megastar",
  },
  {
    id: uuidv4(),
    username: "Roman Reigns",
    content: "WWE",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//New post creation
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body; //destructuring the data present in the body
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

//view the post in detail
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id); //we find the id of posts id we passed in the array if it is equal to the posts id then performing the next line logic
  console.log(post);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.send("patch request working!");
});

app.listen(port, () => {
  console.log("Listening to port: " + port);
});
