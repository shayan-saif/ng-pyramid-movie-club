var express = require('express');
const { user } = require('../connect');
var router = express.Router();
const userModel = require('../models/user');


// Return SPECIFIC user
router.get('/id/:userId', function (req, res, next) {
  const userId = req.params.userId;
  userModel.findById(userId, (err, user) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("No user with that ID");
    }
  });
});

// Return ALL users
router.get('/', async function (req, res, next) {
  const users = await userModel.find();
  res.json(users);
});

// Check authentication status
router.get('/status', function (req, res, next) {
  res.json(req.user);
});



module.exports = router;
