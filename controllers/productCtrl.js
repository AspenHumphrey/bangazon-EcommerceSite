'use strict';

module.exports.getProductHome = (req, res, next) => {
  const { Product } = req.app.get('models');
  Product.findAll({ order: [['date_created', 'DESC']], limit: 20 })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};

module.exports.getProductDetail = (req, res, next) => {
  const { Product } = req.app.get('models');
  Product.findOne({ raw: true, where: { id: req.params.id } })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};

module.exports.getAllProductsInCategory = (req, res, next) => {
  const { Product } = req.app.get('models');
  Product.findAll({ raw: true, where: { CategoryId: req.params.id } })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};


module.exports.getThreeProductsAndCategory = (req, res, next) => {
   const { Product } = req.app.get('models');
   Product.findAll({ raw: true, where: { CategoryId: req.params.id }, limit: 3, order: [['date_created', 'DESC']] })
   .then( ( product )=>{
     res.send(JSON.stringify( product ));
   })
   .catch( (err) => {
     next(err);
    });
  };

