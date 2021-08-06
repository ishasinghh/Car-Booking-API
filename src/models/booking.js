const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const CabBook = sequelize.define('cabBook', {
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CabBook;
