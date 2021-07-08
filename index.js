const sequelize = require('./Utils/database');
const Injury = require('./Models/Injury');
const Game = require('./Models/Game');
const Level = require('./Models/Level');

sequelize.authenticate()
    .then(res => { console.log("db connected"); main() })
    .catch(rej => console.log("db connection error"));


function main() {

    sequelize.sync({
        force: true
    });

}

    //User.hasOne(Project);
    //Project.belongsTo(User);