const { DataTypes, Model } = require('sequelize');
const sequelize = require("../Utils/database");
const {Doctor} = require('./doctor');
const {Injury} = require('./injury');

/* ---------------------------- patient table ---------------------- */
const Patient = sequelize.define('Patient', {

    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
});

/* ---------------------------- patient relations ---------------------- */
Patient.belongsTo(Doctor,{
    foreignKey:"doctorId",allowNull:false
});

Patient.belongsToMany(Injury,{
    through:"PatientInjury",
    timestamps: false
});

/* ---------------------------- patient creation ---------------------- */

function createPatient(patientI){

    const injuryType = injuryKind(patientI.injury)
    console.log("the kind of injury is : ",injuryType);

    Patient.create({

        name    : patientI.name ,
        email   : patientI.email,
        phone   : patientI.phone,
        doctorId: patientI.doctorId

    })

    //const patient_ID = patientID(patientI.phone)
    //console.log("The id of patient is : ",patient_ID);
    /*
    sequelize.models.PatientInjury.create({
        patientId: patient_ID.dataValues.id ,
        injuryId : injuryType.dataValues.id
    })*/
}

/*async function patientID(phone){
    return await Patient.findOne({ where: { phone: phone } });
}*/
async function injuryKind(injury){
    let  x = await Injury.findOne({ where: { name: injury } });
    console.log("data :: ",x.dataValues.id)
    return x.dataValues.id
}

module.exports.Patient = Patient  ;
module.exports.createPatient= createPatient ;