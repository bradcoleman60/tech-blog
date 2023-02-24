# tech-blog

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)


# **Description**

The goal of this project was to create the back end and front end of a blog portal.  This blog allows users to log into the portal with a user name and password.  Once they are authenticated the users can view blog posts and also add a post of their own.  Additionally, after the post is entered, the user can edit their own posts. 

The back end of this website uses a MySql database.  I utilized the Node.js package - Sequelize to interact with the MySql database including syncing the models and seed data on the start of my server. 

Below is a screen shot of .............

![screenshot](./assets/sc_one.jpg)

Below is a screen shot of .............

![screenshot](./assets/sc_one.jpg)




# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  

In this first block I created the .  
```
add code here

```

The following is an example of an . 

```


```

# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I visit the site for the first time THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in|**Completed**.  XXXXX  |
|2. WHEN I click on the homepage option THEN I am taken to the homepage|**Completed**.  XXXXX  |
|3. WHEN I click on any other links in the navigation THEN I am prompted to either sign up or sign in|**Completed**.  XXXXX  |
|4. WHEN I choose to sign up THEN I am prompted to create a username and password|**Completed**.  XXXXX  |
|5. WHEN I click on the sign-up button THEN my user credentials are saved and I am logged into the site|**Completed**.  XXXXX  |
|6. WHEN I revisit the site at a later time and choose to sign in THEN I am prompted to enter my username and password|**Completed**.  XXXXX  |
|7. WHEN I am signed in to the site THEN I see navigation links for the homepage, the dashboard, and the option to log out|**Completed**.  XXXXX  |
|8. WHEN I click on the homepage option in the navigation THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created|**Completed**.  XXXXX  |
|9. WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment|**Completed**.  XXXXX  |
|10. WHEN I enter a comment and click on the submit button while signed in THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created|**Completed**.  XXXXX  |
|11. WHEN I click on the dashboard option in the navigation THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post|**Completed**.  XXXXX  |
|12. WHEN I click on the button to add a new blog post THEN I am prompted to enter both a title and contents for my blog post|**Completed**.  XXXXX  |
|13. WHEN I click on the button to create a new blog post THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post|**Completed**.  XXXXX  |
|14. WHEN I click on one of my existing posts in the dashboard THEN I am able to delete or update my post and taken back to an updated dashboard|**Completed**.  XXXXX  |
|15. WHEN I click on the logout option in the navigation THEN I am signed out of the site|**Completed**.  XXXXX  |
|16. WHEN I am idle on the site for more than a set time THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments|**Completed**.  XXXXX  |


# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"> | [https://dev.mysql.com/doc/refman/8.0/en/](https://dev.mysql.com/doc/refman/8.0/en/) |
| <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"> | [https://sequelize.org/](https://sequelize.org/) |
| <img src="https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"> | [https://www.npmjs.com/package/handlebars"](https://www.npmjs.com/package/handlebars)|
| <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"> | [https://getbootstrap.com/](https://getbootstrap.com/)|

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

