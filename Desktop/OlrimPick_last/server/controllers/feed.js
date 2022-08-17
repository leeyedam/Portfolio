const stream = require("getstream");

require("dotenv").config();

const api_key = process.env.REACT_APP_STREAM_API_KEY;
const api_secret = process.env.REACT_APP_STREAM_API_SECRET;

const client = stream.connect(api_key, api_secret);

const getToken = (req, res, next) => {
  const token = client.createUserToken(req.body.username);
  res.json({ token });
  next();
};

const githubHook = async (req, res, next) => {
  // feedManager(req.body)
  const { user, created_at, state, html_url } = req.body.pull_request;

  const feedUser = client.feed("notification", "peter");

  await feedUser.addActivity({
    actor: user.login,
    verb: "add",
    object: "picture:10",
    foreign_id: "picture:10",
    created_at,
    state,
    html_url,
    message: `${user.login} Created a Pull Request`,
  });

  const results = await feedUser.get({ limit: 10 });

  res.json(results);
};

module.exports = {
  getToken,
  githubHook,
};
