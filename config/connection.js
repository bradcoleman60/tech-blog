require('dotenv').config();

const Sequelize = require('sequelize');

/*Ternary Method to check the process environment.  If Local then connect to local 
host.  If on heroku.com then use JASWDB_URL*/
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true
        }
    });

    module.exports = sequelize