// Import parts of sequelize library
const { Model, DataTypes, INTEGER } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

// Require the User model
const User = require('./User');

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class Entry extends Model {}

//Create field names in Entry table

Entry.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
  
  author: {
    type: DataTypes.INTEGER,
    references:{
        model: 'User',
        key: 'id'
    }
  },
  blog_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date_posted: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
},
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'entry'
}
);

module.exports = Entry;