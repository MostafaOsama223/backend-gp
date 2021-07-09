const sequelize = require('../Utils/database');
const { DataTypes } = require('sequelize');
const Injury = require('./Injury');

const Game = sequelize.define('Game',{
    gameId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    gameName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    gameUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    timestamps: false,
});

Game.hasOne(Injury);
Injury.belongsTo(Game);

module.exports = Game;