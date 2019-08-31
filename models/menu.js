'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
    menu.hasMany(models.order, {
      foreignKey: 'menuId'
    }),
    menu.belongsToMany(models.category, {
      through: 'category-menu',
      foreignKey: 'menuId'
    })
  };
  return menu;
};