const sequelize = require('./Utils/database');
const Injury = require('./Models/Injury');
const Doctor = require('./Models/doctor');
const DrPatient = require('./Models/dr_patient');
const Game = require('./Models/game');
const Patient = require('./Models/patient');
const patientsGame = require('./Models/patients_game');
const Progress = require('./Models/progress');

sequelize.authenticate()
    .then(res => { console.log("db connected"); main() })
    .catch(rej => console.log("db connection error"));

    
function main() {

    sequelize.sync({
        force: false
    });

}

    //User.hasOne(Project);
    //Project.belongsTo(User);