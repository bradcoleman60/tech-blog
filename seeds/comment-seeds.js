const  Comment  = require("../models/Comment");

const commentData = [
  {
    author: 2,
    entry_id: 1,
    comment_text: "NICE BLOG POST",
  },
  {
    author: 2,
    entry_id: 2,
    comment_text: "IT IS GOOD",
  },
  {
    author: 2,
    entry_id: 3,
    comment_text: "IT IS THE WORST",
  },
  {
    author: 2,
    entry_id: 5,
    comment_text: "THIS IS FANTASTIC",
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
