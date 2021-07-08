const sequelize = require('../Utils/database');

const DOC = sequelize.define('Doctor', {
    Doctor_id: {

        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.INTEGER, allowNull: false },
    Patients_no: { type: Sequelize.INTEGER, allowNull: false },

},{
    freezeTableName: true,
    timestamps: false
});

module.exports = DOC ;