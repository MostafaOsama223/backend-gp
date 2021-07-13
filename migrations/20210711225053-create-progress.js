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

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Progresses');
  }
};