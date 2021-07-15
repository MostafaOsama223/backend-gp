require('dotenv').config();

const { sequelize, Doctor, Patient, Injury } = require('./Models');
const express = require('express')
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

//#region <MIDDLEWARES>
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//#endregion

const main = async () => {
	const patient = await Patient.get(2);
	const doctor = await patient.getDoctor();
	// console.log(patient);
	// console.log(doctor);
	// console.log(await doctor.getPatients());
	const injury = await Injury.get(4)
	// console.log(injury);
	patient.addInjury(injury);
	// console.log(await injury.getPatients());
	// const newPatient = await Patient.createPatient({
	//     name: 'patient x',
	//     email: 'www.com',
	//     phone: 1234,
	//     doctorId: await doctor.id
	// })
}

//main()

const server = app.listen(port, () => {
	console.log(`server is connected on port :: ${port}`);
})

//#region <DOCTOR>
app.post('/createDoctor',(req,res)=>{
	console.log("i recieved doctor data");
	Doctor.add(req.body);
	res.send("recieved");
})

app.post("/getDoctor",(req,res)=>{
	console.log("i recieved request to search for a doctor");
	Doctor.get(req.body.id).then((data)=>{
			console.log("DR   :" , data.name)
			console.log("DR   :" , data.id)
			console.log("DR   :" , data.phone)
			/* send data to front end to display it */
	})
	res.send("recieved")
})

app.post("/deleteDoctor",(req,res)=>{
	console.log("i recieved request to delete a doctor");
	Doctor.delete(req.body.id);
	res.send("request done !")
})

app.post("/updateDoctor",(req,res)=>{
	console.log("i recieved request to update doctor data")
	Doctor.update(req.body);
	res.send("updated done !");
})
//#endregion

//#region <PATIENT>
app.route('/patient')
	.all((req, res, next) => {
		next()
	})
	.post(async (req, res)=>{
		res.send(await Patient.add(req.body));
	})
	.get(async (req,res)=>{
		const patient = await Patient.get(req.query.id);
		const injuries = await patient.getInjuries();
    	res.json({ patient, injuries})
	})
	.delete(async (req,res)=>{
    	res.json(await Patient.delete(req.body.id))
	})
	// .put('/:patientId', (req,res)=>{
	// 	console.log("i recieved request to update a patient data")
	// 	Patient.update(req.body);
	// 	res.send("updated done !");
	// })
//#endregion

//#region <INJURY>
app.post('/injury', async (req, res)=>{
	console.log(req.body.injuryName);
	res.send(await Injury.create(req.body));
})
//#endregion
