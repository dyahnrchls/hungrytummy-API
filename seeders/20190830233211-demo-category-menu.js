'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        categoryId: 4,
        menuId: 4
      }
    ]

    return queryInterface.bulkInsert('category_menu', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('category_menu', null, {})
  }
};
