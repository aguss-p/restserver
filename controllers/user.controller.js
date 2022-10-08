const { response } = require("express");

const userGet = (req, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({ msg: "get API", q, nombre, apikey });
};
const userPost = (req, res = response) => {
  const body = req.body;

  res.json({ msg: "post API", body });
};
const userPut = (req, res = response) => {
  const { id } = req.params;
  res.json({ msg: "put API", id });
};
const userPatch = (req, res = response) => {
  res.json({ msg: "patch API" });
};
const userDelete = (req, res = response) => {
  res.json({ msg: "delete API" });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
};
