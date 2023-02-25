const  Comment  = require("../models/Comment");

const commentData = [
  {
    comment_author: 2,
    entry_id: 1,
    comment_text: "Great article! I agree that web development has come a long way and there are so many exciting technologies to work with now.",
  },
  {
    comment_author: 2,
    entry_id: 1,
    comment_text: "I'm just starting out in web development and this article was really helpful in giving me an overview of the landscape. Thanks!",
  },
  {
    comment_author: 2,
    entry_id: 2,
    comment_text: "Responsive design is so important these days, with so many people accessing the web on their phones. It's great to see more and more sites taking it seriously.",
  },
  {
    comment_author: 2,
    entry_id: 3,
    comment_text: "SEO is such a mystery to me, but this article helped demystify it a bit. I'm going to try some of these techniques on my own site and see if they make a difference.",
  },
  {
    comment_author: 2,
    entry_id: 4,
    comment_text: "SPAs are definitely the future of web development. It's amazing what can be accomplished on a single page these days!",
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
