require('dotenv').config();
const sequelize = require('./Utils/database') ;
const express = require('express');
const bodyparser = require('body-parser');
const {createDoctor,getDoctor,deleteDoctor,updateDoctor}  = require('./Models/doctor');
const {createPatient ,getPatient,deletePatient ,updatePatient} = require('./Models/patient');
const {createInjury}  = require('./Models/injury');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


const port = 3000 ;
const data =[] ;

const server = app.listen(port , ()=>{
    console.log(`server is connected on port :: ${port}`);
})

/*---------------------- Doctor request------------------- */
app.post('/createDoctor',(req,res)=>{
   
    console.log("i recieved doctor data");
    createDoctor(req.body);
    res.send("recieved");
})
app.post("/getDoctor",(req,res)=>{
    console.log("i recieved request to search for a doctor");
    getDoctor(req.body.id).then((data)=>{
        console.log("DR   :" , data.name)
        console.log("DR   :" , data.id)
        console.log("DR   :" , data.phone)
        /* send data to front end to display it */
    })

    res.send("recieved")
})
app.post("/deleteDoctor",(req,res)=>{
    console.log("i recieved request to delete a doctor");
    deleteDoctor(req.body.id);
    res.send("request done !")
})
app.post("/updateDoctor",(req,res)=>{
    console.log("i recieved request to update doctor data")
    updateDoctor(req.body);
    res.send("updated done !");

})
/*---------------------- patient  request------------------- */
 app.post('/createPatient',(req,res)=>{
    console.log("i recieved patient data");
    createPatient(req.body);
    res.send("recieved");
 })
 app.post("/getPatient",(req,res)=>{
    console.log("i recieved request to search for a Patient");
    getPatient(req.body.id).then((data)=>{
        console.log("DR   :" , data.name)
        console.log("DR   :" , data.id)
        console.log("DR   :" , data.phone)
        /* send data to front end to display it */
    })
    res.send("recieved")
})
app.post("/deletePatient",(req,res)=>{
    console.log("i recieved request to delete a patient");
    deletePatient(req.body.id);
    res.send("request done !")
})
app.post("/updatePatient",(req,res)=>{
    console.log("i recieved request to update a patient data")
    updatePatient(req.body);
    res.send("updated done !");
})

 /*---------------------- Injury  request------------------- */
 app.post('/injury',(req,res)=>{
     console.log("i recieved new injury data");
     createInjury(req.body);
     res.send("recieved");
 })