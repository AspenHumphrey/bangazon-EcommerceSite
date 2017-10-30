'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {timestamps: false});

  User.associate = function(models) {
    User.hasMany(models.PaymentType, {
      foreignKey: 'userId',
      onDelete: 'cascade'
    });
  };

  return User;
};
