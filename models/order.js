'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.hasMany('models.menu', {
      foreignKey: 'menuId',
      as:'menuId'
    }),
    order.hasMany('models.transaction', {
      foreignKey: 'transactionId',
      as: 'transactionId'
    })
  };
  return order;
};