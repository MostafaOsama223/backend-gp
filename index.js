const sequelize = require('./Utils/database');
const Injury = require('./Models/Injury');

sequelize.authenticate()
    .then(res => { console.log("db connected"); main() })
    .catch(rej => console.log("db connection error"));


function main() {

    sequelize.sync({
        force: false
    });

}