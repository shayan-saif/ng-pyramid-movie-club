var express = require('express');
const { user } = require('../connect');
var router = express.Router();
const userModel = require('../models/user');
const passport = require('passport');


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

// Change password
router.post('/id/:userId', function (req, res, next) {
  const userId = req.params.userId;
  const password = req.body.password;

  if (req.user) {
    userModel.findById(userId, async function (err, user) {
      user.setPassword(password, function (err, user) {
        user.save(function (password) {
          req.logout();
          res.status(200).json(user);
        });
      });
    });
  } else {
    res.status(403).send("You are not authenticated");
  }
});



module.exports = router;
