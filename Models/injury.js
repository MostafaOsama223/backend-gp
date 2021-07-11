const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");

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

function createInjury( injury ){
    Injury.create({
        name : injury.name,
    })
}

module.exports.Injury = Injury;
module.exports.createInjury =  createInjury;
