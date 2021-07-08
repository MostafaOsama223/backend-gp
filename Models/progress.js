const {sequelize} =  require ("../Utils/database")

const progress = sequelize.define('Progress_level', {

    Patient_id:{
 
       type:Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
 
    },
    {freezeTableName :true})

module.exports = progress ;