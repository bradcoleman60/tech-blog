const router = require("express").Router();

// const { where } = require("sequelize");
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

// GET One Blog with All Associated Comments and user_id and author_id's

router.get("/blog/:id", async (req, res) => {
  try{
  const blogEntry = await Entry.findByPk(req.params.id, {include: [{model: User, attributes:['user_name']} ]});
  
  const blogComments = await Comment.findAll(  {include: {model: User} , where: {entry_id: req.params.id}} );
  const blogCommentsArray = blogComments.map((comments) => 
  comments.get({plain: true}))
  
  const blogDetail = blogEntry.get({ plain: true });
      
    console.log("BlogData:", blogDetail)
    console.log("Comments", blogCommentsArray)
    res.render("blog-details", { blogDetail, blogCommentsArray});
      

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
  
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  // res.render('login');
});


module.exports = router;
