'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PatientInjury extends Model {
        static associate({}) {}
    };
    PatientInjury.init({}, {
        sequelize,
        modelName: 'PatientInjury',
        timestamps: false
    });
    return PatientInjury;
};