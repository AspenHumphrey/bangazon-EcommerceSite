'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    detail: DataTypes.STRING,
    date_created: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, { timestamps: false });
  return Product;
};