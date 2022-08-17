const express = require("express");
const app = express.Router();
const { getToken, githubHook } = require("../controllers/feed");
const router = express.Router();

app.post("/get-token/", getToken);
app.post("/github", githubHook);
app.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
