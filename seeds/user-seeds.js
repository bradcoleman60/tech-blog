const  User  = require('../models/User');

// const  User = require('../models/User')

const userData = [
{
    user_name: 'MikeJ',
    password: 'password',

},
{
    user_name: 'MayJ',
    password: 'password',

}, 
{
    user_name: 'JohnT',
    password: 'password',

},

];

// const seedUsers = () => User.bulkCreate(userData);



const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
  
  module.exports = seedUsers
  