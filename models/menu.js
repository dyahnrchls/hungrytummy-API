'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categoryId: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING
  }, {});
  menu.associate = function (models) {
    // associations can be defined here
    menu.belongsTo(models.category, {
      foreignKey: 'categoryId'
    })
  };
  return menu;
};