const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/users', {
    logging: true
});

const path = require('path');
const modelsPath = path.join(require('app-root-path').path, 'Models');

let x = async function () {

    await sequelize.authenticate();
    console.log("db connected");
    initializeDB()
    // .then(console.log)
    // .then(console.log(sequelize.models))
    .catch (error => console.error('Unable to connect to the database:', error))
    return Promise.resolve(sequelize)

    

}();

function initializeDB() {
    return new Promise((resolve, reject) => {
        require('fs').readdirSync(modelsPath).forEach(fileName => {
            if(fileName.match("doctor.js") || fileName.match("patient.js")) {
                // console.log(fileName);
                const file  = require(`${modelsPath}/${fileName}`);
                const filePromise = Object.entries(file).flat()[1];
                console.log(fileName, filePromise);
                filePromise.then(console.log(sequelize.models))
            }
        });

        sequelize.sync({
            force: false
        });

        // insertDummyData();  
        
        resolve("db initialized");
    });
}

function insertDummyData(){

    console.log(sequelize.models);
    sequelize.models.Doctor.bulkCreate([
        {
            name: 'Tarek',
            email: 'tarek@zereba.tom',
            phone: '555442221'
        },
        {
            name: 'Osama',
            email: 'osama@farm.fala7',
            phone: '1234'
        }
    ]);

    sequelize.models.Patient.bulkCreate([
        {
            name: 'mareed',
            email: 'ta3ban@yaCaptain.mostashfa',
            phone: '11',
            doctorId: 1,
        },
        {
            name: 'ta3bana moot',
            email: 'ta3bana@elGw7ar.bsEL7',
            phone: '1123',
            doctorId: 1,
        },
        {
            name: 'el gw hady 5ales',
            email: 'anaWenta@elDonya hos hos',
            phone: '1234',
            doctorId: 2,
        }
    ])

    sequelize.models.Injury.bulkCreate([
        {name: 'Wawa'},
        {name: 'robat saleebe'},
        {name: '5arboosh'},
    ])

    sequelize.models.PatientInjury.bulkCreate([
        {PatientId: 1, InjuryId: 1},
        {PatientId: 1, InjuryId: 2},
        {PatientId: 2, InjuryId: 3},
    ])

    sequelize.models.Game.bulkCreate([
        {
            name: 'L 3rbyat el sh2yaaaah',
            url: 'Click here',
        },
        {
            name: 'fifa16',
            url: 'fifa.com',
        },
    ])

    sequelize.models.Level.bulkCreate([
        {
            maxScore: 10,
            difficulty: 'easy',
            gameId: 1
        },
        {
            maxScore: 20,
            difficulty: 'medium',
            gameId: 1
        },
        {
            maxScore: 15,
            difficulty: 'hard',
            gameId: 1
        },
        {
            maxScore: 5,
            difficulty: 'easy',
            gameId: 2
        },
        {
            maxScore: 50,
            difficulty: 'hard',
            gameId: 2
        },
    ])

    sequelize.models.GameInjury.bulkCreate([
        {
            GameId: 1,
            InjuryId: 1
        }
    ])

    sequelize.models.GamePatient.bulkCreate([
        {
            GameId: 1,
            PatientId: 1
        },
        {
            GameId: 1,
            PatientId: 2
        },
        {
            GameId: 2,
            PatientId: 1
        },
    ])

    sequelize.models.Progress.bulkCreate([
        {
            score: 10,
            timeSpent: '02:30:00',
            patientId: 1,
            levelId: 1
        },
        {
            score: 12,
            timeSpent: '00:05:00',
            patientId: 1,
            levelId: 1
        },
        {
            score: 20,
            timeSpent: '04:05:00',
            patientId: 2,
            levelId: 3
        },
    ])
}

module.exports = x