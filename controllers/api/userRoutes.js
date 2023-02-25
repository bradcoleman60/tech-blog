//Define required middleware and models
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Entry, Comment } = require("../../models");

//Register a new user
router.post("/", async (req, res) => {
  // console.log(req.body)
  try {
    const newUser = req.body;
    const userData = await User.create(newUser);
    return res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Log in User
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.body.user_name },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Try again" });
      return;
    }

    const validatePassword = await bcrypt.compare(
      req.body.password,
      userData.dataValues.password
    );

    console.log("this is the output of validatePassword ", validatePassword);

    if (!validatePassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Try again" });
      return;
    }

    // Defines the variables to be saved in the sessions table (cookie)
    req.session.user_id = userData.dataValues.id;
    req.session.logged_in = true;

    /*This Saves user id and a variable called "logged_in" as true to the session table  
        Note, we need to save this to sessions BEFORE we render the homepage
        because the home page rendering requires the id of the logged in user*/
    req.session.save(() => {
      res.render("homepage", {
        logged_in: req.session.logged_in,
      });
    });
  } catch (err) {
    console.log(" This is the error on userRoutes: ======>", err);
    res.status(400).json(err);
  }
});

//Log out the user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status.apply(404).end();
  }
});

module.exports = router;
