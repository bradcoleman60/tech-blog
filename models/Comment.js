// Import parts of sequelize library
const { Model, DataTypes, INTEGER } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

// Require the User model
// const User = require("./User");
// const Entry = require("./Entry");

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class Comment extends Model {}

//Create field names in Entry table

Comment.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },

    comment_author: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    entry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "entry",
        key: 'id'
      }
    },

    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    comment_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
