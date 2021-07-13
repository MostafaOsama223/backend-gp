const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");
const { Game } = require('./game');

function define (sequelize){
    const Level = sequelize.define('Level', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        maxScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        difficulty: {
            type: DataTypes.STRING,
            values: ['easy', 'medium', 'hard'],
            allowNull: false,   
        }
    },{
        freezeTableName: true,
        timestamps: false,
    });
    
    Game.then(Game =>
        Level.belongsTo(Game,{
            foreignKey:"gameId",
            allowNull:false
        })
    );

    return Level
}




module.exports = {
    Level: sequelize.then(define)
};
