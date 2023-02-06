const  User  = require('../models/User');

// const  User = require('../models/User')

const userData = [
{
    user_name: 'Mike Johnson',
    password: '22334',

},
{
    user_name: 'May Jones',
    password: 'poidd94',

}, 
{
    user_name: 'John Tom',
    password: 'sdkdk9d9dk',

},

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers