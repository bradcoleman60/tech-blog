// Import parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

// Require the User model
// const User = require("./User");

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class Entry extends Model {}

//Create field names in Entry table

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    blog_text: {
      type: DataTypes.TEXT,
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
    modelName: 'entry',
  }
);

module.exports = Entry;
