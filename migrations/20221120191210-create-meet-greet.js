'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meetgreet', {
      event_id: {
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        allowNull: false,
        type: Sequelize.TIME
      },
      meet_end_time: {
        allowNull: false,
        type: Sequelize.TIME
      },
      meet_greed_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meetgreet');
  }
};