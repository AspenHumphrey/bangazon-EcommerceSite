'use strict';

module.exports.getProduct = (req, res, next) => {
  console.log("product");
  const { Products } = req.app.get('models');
  Products.findAll({ order: [['date_created', 'DESC']], limit: 20 })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( (err) => {
    next(err);
  });
};



