// Import parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// Import connection from config.js
const sequelize = require("../config/connection.js");

const bcrypt = require('bcrypt');

// Initialize Entry model (ie table) by extending off Sequelize's Model Class
class User extends Model {}

//Create field names in Entry table

User.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {notNull: true}
    },
    //Need to encrypt this
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[8]
      },
      validate: {notNull: true}
    },
  },
{
  hooks: {
    beforeCreate: async (newUser) => {
        const salt = 12;
        newUser.password = await bcrypt.hash(newUser.password, salt);
        return newUser;
    },
  },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  },

);

module.exports = User;
