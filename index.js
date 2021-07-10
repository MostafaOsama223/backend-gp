require('dotenv').config();
const sequelize = require('./Utils/database') ;
const express = require('express')


const app = express();
const port = 3000 ;

const data =[]

const server = app.listen(port , ()=>{
    console.log(`server is connected on port :: ${port}`);
})

app.post('/rec',(req,res)=>{
    console.log("i recieved some data");
    console.log(req.query);
    res.send("recieved");
})



/*
(() => {
    
    // Game.create({gameName: "game1", gameUrl: 'xxxx'})
    // Level.create({timeSpent: '25:16:20', score: 32, maxScore: 30, difficulty: 'easy', gameId: 1})

})();
*/
