const { Sequelize } = require('sequelize');

module.exports = new Sequelize('musicalInstrumentsShop', 'musicalInstrumentsShopUser', 'password', {
  dialect: 'mysql',
  host: process.env.HOST,
});


require('dotenv').config();



