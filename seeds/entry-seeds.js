const  Entry  = require("../models/Entry");

const entryData = [
  {
    author_id: 1,
    blog_title: "Technology is Cool",
    blog_text: "This is a cool technology",
  },
  {
    author_id: 1,
    blog_title: "Javascript",
    blog_text: "Javascript us useful",
  },
  {
    author_id: 1,
    blog_title: "Relational Databases",
    blog_text: "MySql Rocks the databases",
  },
  {
    
    author_id: 2,
    blog_title: "Can I express myself",
    blog_text: "I used express to create a server",
  },
  {
    
    author_id: 2,
    blog_title: "Lets Sequelize MySql",
    blog_text: "I use Sequelize to help with MySlq statements",
  },
  {
    
    author_id: 3,
    blog_title: "GIT the version",
    blog_text: "I use GIT to track versions of my code",
  },
  {
    
    author_id: 3,
    blog_title: "Lets talk Git Hub",
    blog_text: "I  post my work on repos on GIT Hub",
  },
];

const seedEntries = () => Entry.bulkCreate(entryData);

module.exports = seedEntries;
