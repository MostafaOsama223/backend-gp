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

async function createPatient(patientI){

    let injury_ID = await getInjuryId(patientI.injury);
        console.log("The type of injury is :", injury_ID);
        const patient = await Patient.create({

            name    : patientI.name ,
            email   : patientI.email,
            phone   : patientI.phone,
            doctorId: patientI.doctorId
    
        })
    
    //console.log("osama",patient);
    let patient_ID = await getpatientId(patientI.phone)
    console.log("The id of patient is : ", patient_ID);

    sequelize.models.PatientInjury.create({
        InjuryId  : injury_ID ,
        PatientId: patient_ID 
    })
}

async function getpatientId(phone){
    let patient =  await Patient.findOne({ where: { phone: phone } });
    return patient.id
}
async function getInjuryId(injury){
    let  injuryId = await Injury.findOne({ where: { name: injury } });
    return injuryId.id
}

module.exports.Patient = Patient  ;
module.exports.createPatient= createPatient ;