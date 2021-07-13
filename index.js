require('dotenv').config();
const sequelize = require('./Utils/database');
const express = require('express')
const bodyparser = require('body-parser');
const {
    createDoctor, getAllDoctors
} = require('./Models/doctor');
const {
    createPatient
} = require('./Models/patient')
const {
    createInjury
} = require('./Models/injury');
var router = express.Router()
const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


// const doctorRouter = express.Router();
// doctorRouter.use('/doctor');

const server = app.listen(port, () => {
    console.log(`server is connected on port :: ${port}`);
})



app.route('/doctor')
    .all((req, res, next) => {
        // console.log("doctor");
        next()
    })
    .get(async function(req, res, next) {
        res.json(await getAllDoctors());
    })
    .post(async (req, res, next) => {
        createDoctor(req.body)
        .then(result => result.status(201).send(result))
        .catch(error => res.status(400).send(error.errors[0].message))
        
    });

app.post('/patient', (req, res) => {
    console.log("i recieved patient data");
    createPatient(req.body)
        .then(res.send(req.body))
        .catch(error => console.log(error))
})

app.post('/injury', (req, res) => {
    console.log("i recieved new injury data")
    createInjury(req.body)
        .then(res.send(req.body))
        .catch(res.send("error creating injury."))
})

// app.use('/', (req, res) => {
//     console.log(req.body);
//     res.header("testHeader", `${req.method} with body ${JSON.stringify(req.body)} sent to server.`)
//     res.send(`${req.method} with body ${JSON.stringify(req.body)} sent to server.`)
// })