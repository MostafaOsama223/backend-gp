const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/users');

sequelize.authenticate()
    .then(res => {
        console.log("db connected");
        x()
    })
    .catch(rej => console.log("db connection error"));


function x() {
    const Injury = sequelize.define('Injury', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    sequelize.sync();

    // const injury = Injury.build({id: 0})        
    // console.log(injury instanceof Injury);
    // injury.save();
}