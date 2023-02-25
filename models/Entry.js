// Import parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class Entry extends Model {}

//Create field names in Entry table

Entry.init(
  {
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
      validate: {notNull: true}
    },
    
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notNull: true}
    },

    blog_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {notNull: true}
    },

    date_posted: {
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
    modelName: 'entry',
  }
);

module.exports = Entry;
