const { DataTypes } = require("sequelize");
const sequelize = require("../Database/path_trekking"); // Use sequelize instance

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      // isEmail: true, // Ensures valid email format
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },

);

module.exports = User;