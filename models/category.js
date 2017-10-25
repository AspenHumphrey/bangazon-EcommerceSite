'use strict';
// defining a category.
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, { timestamps: false });

  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      foreignKey: 'CategoryId'
    });
  };

  return Category;
};