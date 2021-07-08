const {sequelize} = require("../Utils/database")

const DR_Patient = sequelize.define('DR_Patient', {
    
    Patient_id:{
 
       type:Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
    name:  { type: Sequelize.STRING, allowNull:false },
    email: { type: Sequelize.STRING, allowNull:false } ,
    phone: { type: Sequelize.INTEGER, allowNull:false } ,
    Doctor_ID :{type: Sequelize.INTEGER, allowNull:false},
 
    },{
        freezeTableName:true, 
        timestamps:false 
    });
module.exports = DR_Patient ;