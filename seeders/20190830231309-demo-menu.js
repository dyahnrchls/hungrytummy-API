'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        name: 'choco lava',
        price: 30000
      }
    ]

    return queryInterface.bulkInsert('menus', data, {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('menus', null, {})
  }
};
