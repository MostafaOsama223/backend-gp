const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");
const Level = require('./level');

const Game = sequelize.define('Game', {

    gameId: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    gameName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    gameUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    freezeTableName: true,
    timestamps: false
});

Game.hasMany(Level, {
    foreignKey:{
        name:'gameId',
        allowNull: false
    }
});


module.exports = Game;