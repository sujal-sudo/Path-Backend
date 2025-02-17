import Sequelize from "sequelize";
import sequelize from "../database/path_trekking.js";  // ✅ Ensure correct path

const Trek = sequelize.define("Trek", {
  id: {
    type: Sequelize.INTEGER,   // ✅ Change DataTypes to Sequelize
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Trek;
