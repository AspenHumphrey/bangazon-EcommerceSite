'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentType', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  },  { timestamps: false });
  
    PaymentType.associate = function(models) {
      PaymentType.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'cascade'
      });
    };
  
  return PaymentType;
};