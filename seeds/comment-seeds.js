const  Comment  = require("../models/Comment");

const commentData = [
  {
    comment_author: 2,
    entry_id: 1,
    comment_text: "NICE BLOG POST",
  },
  {
    comment_author: 2,
    entry_id: 2,
    comment_text: "IT IS GOOD",
  },
  {
    comment_author: 2,
    entry_id: 3,
    comment_text: "IT IS THE WORST",
  },
  {
    comment_author: 2,
    entry_id: 5,
    comment_text: "THIS IS FANTASTIC",
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
