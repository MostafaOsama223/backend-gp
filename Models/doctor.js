const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");


const Doctor = sequelize.define('Doctor', {
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

    // patientsNo: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },

}, {
    freezeTableName: true,
    timestamps: false
});

function createDoctor( doctor ){    
    Doctor.create({
        name  : doctor.name ,
        email : doctor.email,
        phone : doctor.phone

    })   
}
async function getDoctor(doctorId){
    return await Doctor.findByPk(doctorId);
}

function deleteDoctor(id){
    Doctor.destroy({
        where: { id: id }
       })
}
function updateDoctor( dr ){
    const prameters ={};
    Object.keys(dr).forEach(key => {
        if(dr[key]!=='' && dr[key] !== null ){
            prameters[key] =dr[key];
        }
    }) 

    Doctor.update(
        prameters
        ,
        { where: { id: dr.id } }
      )
}
module.exports.Doctor = Doctor;
module.exports.createDoctor = createDoctor;
module.exports.getDoctor = getDoctor;
module.exports.deleteDoctor = deleteDoctor;
module.exports.updateDoctor = updateDoctor;
