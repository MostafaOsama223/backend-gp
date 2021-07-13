require('dotenv').config();
const { sequelize, Doctor, Patient, Injury } = require('./Models');

const express = require('express')
const bodyparser = require('body-parser');

// sequelize.then(x => console.log(x.models))

const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


const port = 3000 ;
const data =[] ;

const server = app.listen(port , ()=>{
    console.log(`server is connected on port :: ${port}`);
})

app.post('/doctor',(req,res)=>{
   
    console.log("i recieved doctor data");
    res.send("recieved");
    Doctor.createDoctor(req.body);

})
app.post('/patient',(req,res)=>{
    console.log("i recieved patient data");
    res.send("recieved");
    Patient.createPatient(req.body)
 })

app.post('/injury',(req,res)=>{
    console.log("i recieved new injury data")
    res.send("recieved");
    Injury.createInjury(req.body);
 })

//app.listen(port)