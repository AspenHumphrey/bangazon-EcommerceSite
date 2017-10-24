'use strict';
// defining a category.
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, { timestamps: false });

  return Category;
};