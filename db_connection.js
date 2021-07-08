const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/game_db');

sequelize.authenticate()
    .then(res => { console.log("db connected"); x();} )
    .catch(rej => console.log("db connection error",rej));


    function create_Injury_Table(){

        const Injury = sequelize.define('Injury', {

        Injury_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },

        name: { type: Sequelize.STRING, allowNull:false },
     
        },
        {freezeTableName:true, timestamps:false })
     
    }
    
    function create_Doctor_Table(){

        const DOC = sequelize.define('Doctor', {
        Doctor_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },
        name:  { type: Sequelize.STRING, allowNull:false },
        email: { type: Sequelize.STRING, allowNull:false } ,
        phone: { type: Sequelize.INTEGER, allowNull:false } ,
        Patients_no :{type: Sequelize.INTEGER, allowNull:false},
     
        },
        {freezeTableName:true, timestamps:false })
        
    }

    function create_Game_Table(){
        const Game = sequelize.define('Game', {
        
        Game_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },
     
        Game_name: { type: Sequelize.STRING, allowNull:false },
        URL: { type :sequelize.STRING , allowNull : true} ,
    
        },
        {freezeTableName:true, timestamps:false })
     
     sequelize.sync()
    }
    function create_Patient_Table(){
        const Patient = sequelize.define('Patient', {
        
        Patient_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },
        name:  { type: Sequelize.STRING, allowNull:false },
        email: { type: Sequelize.STRING, allowNull:false } ,
        phone: { type: Sequelize.INTEGER, allowNull:false } ,
        Doctor_ID :{type: Sequelize.INTEGER, allowNull:false},
     
        },

        {freezeTableName:true, timestamps:false })

    }
    function create_DR_Patient_Table(){

        const DR_Patient = sequelize.define('DR_Patient', {
    
        Patient_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },
        name:  { type: Sequelize.STRING, allowNull:false },
        email: { type: Sequelize.STRING, allowNull:false } ,
        phone: { type: Sequelize.INTEGER, allowNull:false } ,
        Doctor_ID :{type: Sequelize.INTEGER, allowNull:false},
     
        },
        {freezeTableName:true, timestamps:false })

    }
    function create_ProgressPatientLevel_Table(){
        const DOC = sequelize.define('Progress_level', {

        Patient_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },
     
        },
        {freezeTableName :true})
     sequelize.sync()
    }
    function create_PatientGame_Table(){
        const DOC = sequelize.define('Patient_game', {
        
        PatientGame_id:{
     
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true
        },
        },
        {freezeTableName :true , timestamps:false })
   
    }

    function x(){

        const User = sequelize.define('User', {
            
            user_id:{
         
               
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true

            },
            
            name: { type: Sequelize.STRING, allowNull:false },
         
            },
            {freezeTableName:true})
         
        
        
            const Project = sequelize.define('Project', {
        
                Project_id:{
             
                   type:Sequelize.INTEGER,
                   autoIncrement:true,
                   allowNull:false,
                   primaryKey:true
                },
                
                name: { type: Sequelize.STRING, allowNull:false },
             
                },
                {freezeTableName:true , timestamps:false })
             
        
            
            //User.hasOne(Project);
            Project.belongsTo(User);
            sequelize.sync()
        }