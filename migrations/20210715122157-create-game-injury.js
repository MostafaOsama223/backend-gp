'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GameInjuries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'games',
          },
          key: 'id'
        }
      },
      injuryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'injuries',
          },
          key: 'id'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GameInjuries');
  }
};