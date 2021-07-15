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
	
	// const game2 = await Game.create({
		// 	name: 'o-positions game',
		// 	url: 'o-positions-download.com'
		// })
		
	// const game1 = await Game.create({
	// 	name: 'cubes game',
	// 	url: 'cubes-download.com'
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

	// const doctor = await Doctor.create({
	// 	"name": "el doctor",
	// 	"email": "doctooor",
	// 	"phone": 1231
	// })

	// const patient = await Patient.add({
	// 	"name": "salama",
	// 	"email": "salama@mostashfa.com",
	// 	"phone": 1221,
	// 	"doctorId": doctor.id
	// })

	// const injury = await Injury.bulkCreate([
	// 	{name : "injury1"} ,
	// 	{name : "injury2"}
	// ])

	// patient.addInjury(injury);
	const patient = await Patient.findOne({
		where: { id: 5},
		include: [Game]
	});

	console.log(await patient.getGames());
	// patient.addGame(game1)

}

//main()

const server = app.listen(port, () => {
	console.log(`server is connected on port :: ${port}`);
})

//#region <GAME>
app.get('/games', async (req, res) => {
	var gamesDTO = await Game.findAll({
		include: {
			model: Level,
			attributes: ['id']
		}
	})
	res.send(gamesDTO)
})
//#endregion

//#region <DOCTOR>
app.route('/doctor')
	.all((req, res, next) => {
		next()
	})
	.post(async(req, res)=>{
		res.send(await Doctor.add(req.body));
	})
	.get(async(req, res)=>{
		res.send(await Doctor.get(req.body.id));
	})
	.delete(async(req, res)=>{
		res.send(await Doctor.delete(req.body.id))
	})
	.put(async(req, res)=>{
		res.send(await Doctor.update(req.body));
	})
//#endregion

//#region <PATIENT>
app.route('/patient')
	.all((req, res, next) => {
		next()
	})
	.post(async (req, res)=>{
		let patient = await Patient.add(req.body);
		const injury = await Injury.get(req.body.injuryId);
		await patient.addInjury(injury);
		res.send({ patient, injury});
	})
	.get(async (req,res)=>{
		const patient = await Patient.findOne({
			where: { id: req.query.id},
			include: [{
				model: Injury,
				attributes: ['name'],
				through:{
					attributes:[]
				},
			}],
			attributes: ['id', 'name']
		});
    	res.json(patient)
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
app.route('/injury')
	.all((req,res,next)=>{
		next()
	})
	.post(async(req,res)=>{
		res.send(await Injury.create(req.body));
	})
/*
app.post('/injury', async (req, res)=>{
	console.log(req.body.injuryName);
	res.send(await Injury.create(req.body));
})*/
//#endregion
