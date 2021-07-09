<<<<<<< HEAD
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
=======
require('dotenv').config();

const sequelize = require('./Utils/database');
>>>>>>> 574ce18816a9ba62e26db31b76b1e05845068c4e

(() => {
    sequelize.sync({
        force: false
    });
    // Game.create({gameName: "game1", gameUrl: 'xxxx'})
    // Level.create({timeSpent: '25:16:20', score: 32, maxScore: 30, difficulty: 'easy', gameId: 1})

})();