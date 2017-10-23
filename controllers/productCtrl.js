'use strict';

module.exports.getProduct = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findAll({ order: [['date_created', 'DESC']], limit: 20 })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};

module.exports.getProductDetail = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findOne({ raw: true, where: {id: req.params.id} })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};



