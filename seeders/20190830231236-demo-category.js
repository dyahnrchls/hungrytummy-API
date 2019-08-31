'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        name: 'Promo'
      }
    ]

    return queryInterface.bulkInsert('categories', data, {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('categories', null, {})
  }
};
