'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    detail: DataTypes.STRING,
    date_created: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, { timestamp: false });
  return Product;
};