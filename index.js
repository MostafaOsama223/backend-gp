require('dotenv').config();

const { sequelize, Doctor, Patient, Injury, PatientInjury, Game, Level } = require('./Models');
const express = require('express')
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

//#region <MIDDLEWARES>
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//#endregion

const main = async () => {
	// const game1 = await Game.create({
	// 	name: 'cubes game',
	// 	url: 'cubes-download.com'
	// })

	// const game2 = await Game.create({
	// 	name: 'o-positions game',
	// 	url: 'o-positions-download.com'
	// })

	// await Level.bulkCreate([
	// 	{ maxScore: 30, difficulty: "easy", gameId: game1.id },
	// 	{ maxScore: 50, difficulty: "medium", gameId: game1.id }
	// ])

	// const level = await Level.create({
	// 	maxScore: 20, difficulty: "hard", gameId: game2.id
	// })

	// console.log(game1);
	// console.log(await game1.getLevels());
	// console.log(game2);
	// console.log(await level.getGame());
}

//main()

const server = app.listen(port, () => {
	console.log(`server is connected on port :: ${port}`);
})

//#region <GAME>
app.get('/games', async (req, res) => {
	var response = [];
	var games = await Game.findAll();

	for (let i = 0; i < games.length; i++) {
		const game = games[i];
		const levels = await game.getLevels();
		await response.push({ game,  levels})
	}
	res.send(response)
})
//#endregion

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
		const patient = await Patient.add(req.body);
		const injury = await Injury.get(req.body.injuryId);
		await patient.addInjury(injury);
		res.send({ patient, injury});
	})
	.get(async (req,res)=>{
		const patient = await Patient.get(req.query.id);
		const injuries = await patient.getInjuries();
    	res.json({ patient, injuries})
	})
	.delete(async (req,res)=>{
		await PatientInjury.destroy({ where: { patientId: req.body.id }})
		const numOfDeletedRows = await Patient.delete(req.body.id);
    	res.json(numOfDeletedRows)
	})
	.put(async (req,res)=>{
		res.send(await Patient.modify(req.body));
	})
//#endregion

//#region <INJURY>
app.post('/injury', async (req, res)=>{
	console.log(req.body.injuryName);
	res.send(await Injury.create(req.body));
})
//#endregion
