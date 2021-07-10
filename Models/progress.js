const {
    DataTypes
} = require('sequelize');
const sequelize = require("../Utils/database");
const Level = require('./level');
const Patient = require('./patient');

const Progress = sequelize.define('Progress', {

    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    score: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },

    timeSpent: {
        type: DataTypes.TIME,
        allowNull: false,
    },

}, {
    freezeTableName: true,
    timestamps: false,
})

Progress.belongsTo(Patient, {
    foreignKey: {
        name: 'patientId',
        allowNull: false
    }
});

Progress.belongsTo(Level, {
    foreignKey: {
        name: 'levelId',
        allowNull: false
    }
});

module.exports = Progress;