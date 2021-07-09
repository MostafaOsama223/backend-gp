const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/game_db');
const path = require('path');
const modelsPath = path.join(require('app-root-path').path, 'Models');

(async () => {
    try {
        await sequelize.authenticate();
        console.log("db connected");
        initializeDB();
        console.log("db initialized")
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

function initializeDB() {
    require('fs').readdirSync(modelsPath).forEach(fileName => {
        require(`${modelsPath}/${fileName}`);
    });
}

module.exports = sequelize;