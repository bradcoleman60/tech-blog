//Define required middleware and models
const router = require("express").Router();
const { where } = require("sequelize");
const sequelize = require("../config/connection");
const { User, Entry, Comment } = require("../models");

//Get all Blogs for the Home Page
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.findAll({
      include: [{ model: User }, { model: Comment }],
    });

    const entriesData = entries.map((entriesX) =>
      entriesX.get({ plain: true })
    );

    res.render("homepage", {
      entriesData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET One Blog with All Associated Comments and user_id and author_id's

router.get("/blog/:id", async (req, res) => {
  try {
    const blogEntry = await Entry.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["user_name"] }],
    });

    const blogComments = await Comment.findAll({
      include: { model: User },
      where: { entry_id: req.params.id },
    });
    const blogCommentsArray = blogComments.map((comments) =>
      comments.get({ plain: true })
    );

    const blogDetail = blogEntry.get({ plain: true });

    console.log("BlogData:", blogDetail);
    console.log("Comments", blogCommentsArray);
    res.render("blog-details", {
      blogDetail,
      blogCommentsArray,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET One Blog for the logged in user so the can edit it

router.get("/blog/edit/:id", async (req, res) => {
  try {
    const blogEntry = await Entry.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["user_name"] }],
    });
    const blogComments = await Comment.findAll({
      include: { model: User },
      where: { entry_id: req.params.id },
    });
    const blogDetail = blogEntry.get({ plain: true });

    res.render("edit-blog", {
      blogDetail,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get blogs for the logged in user
router.get("/dashboard/", async (req, res) => {
  try {
    const blogEntry = await Entry.findAll({
      include: { model: User },
      where: { author_id: req.session.user_id },
    });
    const blogDetail = blogEntry.map((data) => data.get({ plain: true }));

    res.render("dashboard", {
      blogDetail,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
