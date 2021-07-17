'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Progresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },

      timeSpent: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.STRING,
        values: ['easy', 'medium', 'hard'],
        allowNull: false,  
      },
      patientId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'patients',
          },
          key: 'id'
        }
      },
      levelId:{
        type:Sequelize.SMALLINT,
        allowNull:false,
        references:{
          model:{
            tableName:"levels"
          },
          key:"id"
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Progresses');
  }
};