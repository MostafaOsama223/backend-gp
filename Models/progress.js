const {sequelize} =  require ("../Utils/database")

const progress = sequelize.define('Progress_level', {

    Patient_id:{
 
       type:sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
 
    },
    {freezeTableName :true})

module.exports = progress ;