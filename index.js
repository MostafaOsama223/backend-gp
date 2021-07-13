require('dotenv').config();
const { sequelize, Doctor, Patient, Injury } = require('./Models');

const express = require('express')
const bodyparser = require('body-parser');

// sequelize.then(x => console.log(x.models))

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

/*---------------------- Doctor request------------------- */
app.post('/createDoctor',(req,res)=>{
   
    console.log("i recieved doctor data");
    Doctor.createDoctor(req.body);
    res.send("recieved");
})
app.post("/getDoctor",(req,res)=>{
    console.log("i recieved request to search for a doctor");
    Doctor.getDoctor(req.body.id).then((data)=>{
        console.log("DR   :" , data.name)
        console.log("DR   :" , data.id)
        console.log("DR   :" , data.phone)
        /* send data to front end to display it */
    })

    res.send("recieved")
})
app.post("/deleteDoctor",(req,res)=>{
    console.log("i recieved request to delete a doctor");
    Doctor.deleteDoctor(req.body.id);
    res.send("request done !")
})
app.post("/updateDoctor",(req,res)=>{
    console.log("i recieved request to update doctor data")
    Doctor.updateDoctor(req.body);
    res.send("updated done !");

})

/*---------------------- patient  request------------------- */
 app.post('/createPatient',(req,res)=>{
    console.log("i recieved patient data");
    createPatient(req.body);
    res.send("recieved");
    Patient.createPatient(req.body)
 })
 app.post("/getPatient",(req,res)=>{
    console.log("i recieved request to search for a Patient");
    Patient.getPatient(req.body.id).then((data)=>{
        console.log("DR   :" , data.name)
        console.log("DR   :" , data.id)
        console.log("DR   :" , data.phone)
        /* send data to front end to display it */
    })
    res.send("recieved")
})
app.post("/deletePatient",(req,res)=>{
    console.log("i recieved request to delete a patient");
    Patient.deletePatient(req.body.id);
    res.send("request done !")
})
app.post("/updatePatient",(req,res)=>{
    console.log("i recieved request to update a patient data")
    Patient.updatePatient(req.body);
    res.send("updated done !");
})

/*---------------------- Injury  request------------------- */
app.post('/injury',(req,res)=>{
    console.log("i recieved new injury data")
    res.send("recieved");
    Injury.createInjury(req.body);
 })
