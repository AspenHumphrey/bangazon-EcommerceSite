'use strict';

module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    detail: DataTypes.STRING,
    date_created: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, { timestamps: false });

  Product.associate = ( models ) => {
    Product.belongsTo( models.Category, {
      foreignKey: 'CategoryId',
      onDelete: 'CASCADE'
    });
  };


  return Product;
};