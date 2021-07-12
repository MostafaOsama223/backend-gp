const sequelize = require('../Utils/database');
const {
    DataTypes
} = require('sequelize');
const { Injury } = require('./Injury');
const { Patient } = require('./patient')

function define(sequelize) {
    const Game = sequelize.define('Game', {
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
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    Injury.then(Injury => 
        Game.belongsToMany(Injury, {
            through: "GameInjury",
            timestamps: false
        })
    );
    
    Patient.then(Patient =>
        Game.belongsToMany(Patient, {
            through: "GamePatient",
            timestamps: false
        })
    );

    return Game;
}

module.exports = {
    Game: sequelize.then(define)
};