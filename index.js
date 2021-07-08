const sequelize = require('./Utils/database');

/*  MODELS  */
const Doctor = require('./Models/doctor');
const DrPatient = require('./Models/drPatient');
const Game = require('./Models/game');
const Injury = require('./Models/injury');
const Level = require('./Models/level');
const Patient = require('./Models/patient');
const PatientGame = require('./Models/patientGame');
const Progress = require('./Models/progress');

sequelize.authenticate()
    .then(res => { console.log("db connected"); main() })
    .catch(rej => console.log(rej));


function main() {
    
    sequelize.sync({
        force: false
    });
    Game.create({gameName: "game1", gameUrl: 'xxxx'})
    Level.create({timeSpent: '25:16:20', score: 32, maxScore: 30, difficulty: 'easy', gameId: 1})

}