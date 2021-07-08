const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mysql://root:@localhost:3306/users');
const sequelize = new Sequelize('mysql://root:@localhost:3306/users');

module.exports = sequelize;