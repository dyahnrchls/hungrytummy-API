'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_menu = sequelize.define('category_menu', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'menu',
        key: 'id'
      }
    }
  }, {});
  category_menu.associate = function(models) {
    // associations can be defined here
  };
  return category_menu;
};