const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");
const Game = require('./game');

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

Level.belongsTo(Game,{
    foreignKey:"gameId",
    allowNull:false
});

module.exports = Level;
