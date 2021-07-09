const{sequelize}= require("../Utils/database")

const patientGame = sequelize.define('Patient_game', {
        
    PatientGameId:{
 
       type:sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
    },{
        freezeTableName :true ,
        timestamps:false 
    });

module.exports = patientGame ;