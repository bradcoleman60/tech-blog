const  Entry  = require("../models/Entry");

// const  { Entry }  = require('../models');

const entryData = [
  {
    author_id: 1,
    blog_title: "The Evolution of Web Development",
    blog_text: "Web development has come a long way since the early days of HTML and CSS. Today, developers use a wide range of technologies to build web applications, including JavaScript frameworks like React and Angular, back-end languages like PHP and Ruby, and databases like MySQL and MongoDB.",
  },
  {
    author_id: 1,
    blog_title: "How to Build a Responsive Website",
    blog_text: "Building a responsive website requires a combination of HTML, CSS, and JavaScript skills. The goal is to create a site that looks great and functions well on all devices, from desktops to smartphones. Key techniques include using media queries to adjust layout and font sizes, optimizing images for faster load times, and testing your site on different devices to ensure compatibility.",
  },
  {
    author_id: 1,
    blog_title: "The Importance of SEO in Web Development",
    blog_text: "Search engine optimization (SEO) is critical for any website that wants to be found online. Web developers can improve a site's SEO by optimizing content for keywords, using meta tags and descriptions, and building links to other high-quality sites. Additionally, site speed, mobile-friendliness, and security all play a role in SEO rankings.",
  },
  {
    
    author_id: 2,
    blog_title: "The Rise of Single-Page Applications",
    blog_text: "Single-page applications (SPAs) are becoming increasingly popular, thanks to their ability to deliver fast, seamless user experiences. SPAs use JavaScript to dynamically update content on a single page, rather than loading separate pages for each action. This approach can improve site speed and reduce server load, but requires careful planning to ensure optimal performance and SEO.",
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



