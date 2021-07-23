require('dotenv').config();

const { Sequelize, sequelize, Doctor, Patient, Injury, PatientInjury, Game, Level ,Progress } = require('./Models');
const express = require('express')
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

//#region <MIDDLEWARES>
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(require('cors')())
//#endregion

const main = async () => {
	
	 const game2 = await Game.create({
			name: 'o-positions game',
			url: 'o-positions-download.com'
	 })
		
	 const game1 = await Game.create({
	 	name: 'cubes game',
	 	url: 'cubes-download.com'
	 })
	 await Level.bulkCreate([
	 	{ maxScore: 30, difficulty: "easy", gameId: game1.id },
	 	{ maxScore: 50, difficulty: "medium", gameId: game1.id }
	 ])


	const level = await Level.create({
	 	maxScore: 20, difficulty: "hard", gameId: game2.id
	 })

	// console.log(game1);
	// console.log(await game1.getLevels());
	// console.log(game2);
	// console.log(await level.getGame());

	 const doctor = await Doctor.create({
	 	"name": "el doctor",
	 	"email": "doctooor",
	 	"phone": 1231
	 })

	 const patient = await Patient.add({
	 	"name": "salama",
	 	"email": "salama@mostashfa.com",
	 	"phone": 1221,
	 	"doctorId": doctor.id
	 })

	 const injury = await Injury.bulkCreate([
	 	{name : "injury1"} ,
	 	{name : "injury2"}
	 ])

	 patient.addInjury(injury);

	/*const patient = await Patient.findOne({
		where: { id: 5},
		include: [Game]
	});*/

	//console.log(await patient.getGames());
	// patient.addGame(game1)

}

//main()

const server = app.listen(port, () => {
	console.log(`server is connected on port :: ${port}`);
})


app.post('/validate',async(req,res)=>{
	const patient = await Patient.findOne({
		where:{
			name : req.body.name,
			email : req.body.email
		},attributes:[
			"id"
		]
	})
	res.send(patient) ;
})

//#region <GAME>
//let data = [];
app.get('/games', async (req, res) => {
	var data = await Game.findAll({
		include: {
			model: Level,
			attributes: ['id']
		},attributes:["id","name"]
	})
	//data.push(gamesDTO);
	console.log(data);
	res.send({data})
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

app.get('/login', async (req, res) => {
	res.status(200).send(req.query.email)
})

app.get('/allpatients', async (req, res) => {
	res.status(200).send(await Patient.findAll())
})

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
			attributes: ['name'],
		});
		const progress = await Progress.findAll({
			where: {
				patientId: { [Sequelize.Op.eq]: req.query.id}
			}
		});
    	res.status(200).send(progress)
	})
	.delete(async (req,res)=>{
		try{
			await PatientInjury.destroy({ where: { patientId: req.body.id }})
			const numOfDeletedRows = await Patient.delete(req.body.id);
			res.json(numOfDeletedRows)
		}catch(error){
			res.send(400)
		}
	})
	.put(async (req,res)=>{
		try{
			res.send(await Patient.modify(req.body));
		}catch(error){
			res.send(400)
		}
	})
//#endregion

//#region <INJURY>
app.route('/injury')
	.all((req,res,next)=>{
		next()
	})
	.post(async(req,res)=>{
		try{ 
			res.send(await Injury.create(req.body));
		}catch(error){
			res.send(400)
		}
	})
//#endregion

//#region
app.route('/progress')
	.all((req,res,next)=>{
		next()
	})
	.post(async (req,res)=>{
		try{
			const progress = await Progress.add(req.body)
			//res.sendStatus(200); /* ok */
			res.send(status);
		}catch(error){
			res.send(400);
		}
	})
//#endregion
/*
app.post('/injury', async (req, res)=>{
	console.log(req.body.injuryName);
	res.send(await Injury.create(req.body));
})*/
//#endregion
