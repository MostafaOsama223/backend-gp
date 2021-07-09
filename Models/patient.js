const{sequelize} = require("../Utils/database")

const Patient = sequelize.define('Patient', {
        
    Patient_id:{
 
       type:sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
    name:  { type: sequelize.STRING, allowNull:false },
    email: { type: sequelize.STRING, allowNull:false } ,
    phone: { type: sequelize.INTEGER, allowNull:false } ,
    Doctor_ID :{type: sequelize.INTEGER, allowNull:false},
 
    },{
        freezeTableName:true,
        timestamps:false 
    });

module.exports = Patient ;