require('dotenv').config();
const sequelize = require('./Utils/database') ;
const express = require('express')
const bodyparser = require('body-parser');
const {createDoctor} = require('./Models/doctor');
const {createPatient} = require('./Models/patient')
const {createInjury} = require('./Models/injury')


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
    createDoctor(req.body);

})
 app.post('/patient',(req,res)=>{
    console.log("i recieved patient data");
    res.send("recieved");
    createPatient(req.body)
 })

 app.post('/injury',(req,res)=>{
     console.log("i recieved new injury data")
     res.send("recieved");
     createInjury(req.body);
 })

