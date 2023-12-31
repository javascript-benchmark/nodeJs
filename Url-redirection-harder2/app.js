const express = require("express");
const app = express();

const blacklist = (newurl) => {
  if (newurl.includes(".") || newurl.includes("/")) {
    return true;
  }
  return false;
};

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.render("index.ejs", { content: "Sorry, this is the old website." });
});

app.get("/newsite", (req, res) => {
  res.render("index.ejs", { content: "Welcome to the new website!" });
});

app.all("/redirect", (req, res) => {
  let newurl = req.query.newurl;
  if (blacklist(newurl)) {
    res.render("index.ejs", {
      content: 'Sorry, you cannot use "." or "/" in the redirect. Good luck!',
    });
  } else res.redirect(302, newurl);
});

app.use(function (req, res) {
  res.status(404).render("404.ejs");
});

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => console.log(`Listening on port ${port}...!!!`));
