var express = require("express");
var router = express.Router();
const passport = require("passport");

var userModel = require("../models/user");
passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

/* GET home page. */
// router.get("/login", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/");
//   } else {
//     var message = req.flash();
//     res.render("auth/login", {
//       title: "Login",
//       user: "",
//       message: message,
//     });
//   }
// });

// router.get("/register", async (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/");
//   } else {
//     var message = {
//       type: req.flash("type"),
//       text: req.flash("text"),
//     };
//     res.render("auth/register", {
//       title: "Register",
//       user: "",
//       message,
//     });
//   }
// });

router.get("/logout", (req, res) => {
  req.logout();
  res.json("Logged out");
});



router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return console.log(err);
    }
    if (!user) {
      res.status(404).send("Invalid credentials");
    } else {
      req.logIn(user, function (err) {
        if (err) {
          console.log(err);
          return next(err);
        }
        let response = {
          _id: user._id,
          username: user.username,
          permission: user.permission,
          joinDate: user.joinDate
        };
        res.json(response);
      });
    }

  })(req, res, next);
});

router.post("/register", async (req, res) => {
  const key = req.body.secret;
  if (key != process.env.REGISTER_KEY) {
    res.status(404).send("Invalid key");
  } else {
    let date = new Date();
    await userModel.register(
      {
        username: req.body.username,
        permission: {
          create: false,
          add: false,
          bookmark: false,
          archive: false,
          delete: false,
          admin: false
        },
        joinDate: date
      },
      req.body.password,
      (err, user) => {
        if (err) {
          res.send(err);
        } else {
          let response = {
            _id: user._id,
            username: user.username,
            permission: user.permission,
            joinDate: user.joinDate
          };

          res.json(response);
        }
      }
    );
  }
});

module.exports = router;
