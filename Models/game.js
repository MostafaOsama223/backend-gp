const { sequelize } = require("../Utils/database")

const Game = sequelize.define('Game', {
        
    Game_id:{
 
       type:Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },
 
    Game_name: { type: Sequelize.STRING, allowNull:false },
    URL: { type :sequelize.STRING , allowNull : true} ,

    },{
        freezeTableName:true, 
        timestamps:false 
    });
module.exports = Game ;