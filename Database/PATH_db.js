const { Sequelize } = require('sequelize'); // Import Sequelize correctly

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('Path_db', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433,
  logging: false,
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


testConnection();

module.exports = sequelize;