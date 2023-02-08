const router = require("express").Router();

const sequelize = require("../config/connection");

const { User, Entry, Comment } = require("../models");

//Get all Blogs for the Home Page
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.findAll({
      include: [{ model: User }, { model: Comment }]})
  

    const entriesData = entries.map((entriesX) => 
      entriesX.get({ plain: true })
      
    );
    console.log("entriesData:", entriesData)
    res.render("homepage", {
      entriesData,
      });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
