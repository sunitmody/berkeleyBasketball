const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'basketball', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to database:', error);
  })

// Create Image Model
const Image = sequelize.define('Image', {
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Create Park Model
const Park = sequelize.define('Park', {
  parkName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Current state of models in db checked and altered if needed.');
  })
  .catch(error => {
    console.log('Error in syncing models.');
  });

module.exports = {
  Image,
  Park
}