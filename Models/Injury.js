const { DataTypes } = require('sequelize');
const sequelize  = require('../Utils/database');

const Injury = sequelize.define('Injury', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Injury;