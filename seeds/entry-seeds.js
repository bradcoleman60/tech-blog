const  Entry  = require("../models/Entry");

const entryData = [
  {
    author: 1,
    blog_text: "This is a cool technology",
  },
  {
    author: 1,
    blog_text: "Javascript us useful",
  },
  {
    author: 1,
    blog_text: "MySql Rocks the databases",
  },
  {
    author: 2,
    blog_text: "I used express to create a server",
  },
  {
    author: 2,
    blog_text: "I use Sequelize to help with MySlq statements",
  },
  {
    author: 3,
    blog_text: "I use GIT to track versions of my code",
  },
  {
    author: 3,
    blog_text: "I  post my work on repos on GIT Hub",
  },
];

const seedEntries = () => Entry.bulkCreate(entryData);

module.exports = seedEntries;
