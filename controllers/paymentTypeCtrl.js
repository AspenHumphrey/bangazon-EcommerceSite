'use strict';

module.exports.getUpdatePayment = (req, res, next) => {
  const { PaymentType } = req.app.get('models');
  console.log('req.body.payment_name, req.body.payment_number', req.body.payment_name, req.body.payment_number);
    // add a for loop on req.body.payment_name 
    PaymentType.update({
      payment_name:req.body.payment_name,
      payment_number:req.body.payment_number
    }, 
      {raw: true, where:{ userId: req.params.id} 
    })
     .then(( paymentType ) => {
      next();
     })
    .catch( (err) => {
      next(err); 
    });
};