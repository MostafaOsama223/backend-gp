const sequelize = require('../Utils/database');
const { DataTypes } = require('sequelize');
const Injury = require('./Injury');
const Patient = require('./patient')

const Game = sequelize.define('Game',{
    Id: {
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

Game.belongsToMany(Injury,{
    through : "gameInjury"
});

Game.belongsToMany(Patient,{
    through : "gamePatient"
});

module.exports = Game;