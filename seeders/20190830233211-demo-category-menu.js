'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        categoryId: 4,
        menuId: 4
      }
    ]

    return queryInterface.bulkInsert('category_menus', data, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('category_menus', null, {})
  }
};
