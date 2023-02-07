// Import parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class User extends Model {}

//Create field names in Entry table

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Need to encrypt this
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[8]
      }
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
