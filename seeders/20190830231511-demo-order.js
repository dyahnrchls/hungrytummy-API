'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        menuId: 1,
        transactionId: 1,
        qty: 2,
        price: 20000,
        status: 1
      }
    ]

    return queryInterface.bulkInsert('orders', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('orders', null, {})
  }
};
