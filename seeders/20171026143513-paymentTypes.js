'use strict';
let { paymentTypes } = require('./data/paymentTypes.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PaymentTypes', paymentTypes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaymentTypes', null, {});
  }
};
