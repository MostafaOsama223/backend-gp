require('dotenv').config();

const sequelize = require('./Utils/database');
(() => {
    sequelize.sync({
        force: false
    });
    // Game.create({gameName: "game1", gameUrl: 'xxxx'})
    // Level.create({timeSpent: '25:16:20', score: 32, maxScore: 30, difficulty: 'easy', gameId: 1})

})();