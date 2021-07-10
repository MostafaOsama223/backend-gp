const sequelize = require('../Utils/database');
const { DataTypes } = require('sequelize');
const Injury = require('./Injury');
const Patient = require('./patient')

const Game = sequelize.define('Game',{
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    timestamps: false,
});

Game.belongsToMany(Injury,{
    through : "GameInjury",
    timestamps: false
});

Game.belongsToMany(Patient,{
    through : "GamePatient",
    timestamps: false
});

module.exports = Game;