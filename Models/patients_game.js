const{sequelize}= require("../Utils/database")

const Patient_game = sequelize.define('Patient_game', {
        
    PatientGame_id:{
 
       type:Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
    },{
        freezeTableName :true ,
        timestamps:false 
    });

module.exports = Patient_game ;