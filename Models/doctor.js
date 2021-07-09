const sequelize = require('../Utils/database');

const Doctor = sequelize.define('Doctor', {
    Doctor_id: {

        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false },
    phone: { type: sequelize.INTEGER, allowNull: false },
    Patients_no: { type: sequelize.INTEGER, allowNull: false },

},{
    freezeTableName: true,
    timestamps: false
});

module.exports = Doctor ;