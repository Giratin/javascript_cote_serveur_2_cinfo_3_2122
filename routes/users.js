var express = require('express');
var router = express.Router();

const { User } = require("../models/user.model");

/**
 * @Path /users
 */


router.post('/', async (req, res) => {
  const user = new User({ ...req.body });
  await user.save();
  res.json(user);
});
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
