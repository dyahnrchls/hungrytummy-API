'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        tableNumber: 1,
        finishedTime: "11:12",
        subtotal: 40000,
        discount: 0,
        serviceCharge: 5000,
        tax: 4000,
        total: 49000,
        isPaid: true,
      }
    ]

    return queryInterface.bulkInsert('transactions', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('transactions', null, {})
  }
};
