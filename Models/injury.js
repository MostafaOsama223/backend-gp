const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database")

const Injury = sequelize.define('Injury', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull:false,
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
