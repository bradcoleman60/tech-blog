// Import parts of sequelize library
const { Model, DataTypes, INTEGER } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class Comment extends Model {}

//Create field names in Entry table

Comment.init(
  {
    comment_author: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        // validate: {notNull: true}
      },
    },
    entry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "entry",
        key: 'id'
      },
      },

    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notNull: true}
    },

    comment_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      validate: {notNull: true}
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
