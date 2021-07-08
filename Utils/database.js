const { Sequelize , DataTypes ,Model } = require('sequelize');
//const sequelize = new Sequelize('mysql://root:@localhost:3306/users');
const sequelize = new Sequelize('mysql://root:@localhost:3306/game_db');

module.exports = {sequelize,DataTypes};