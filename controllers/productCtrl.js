'use strict';

// gets 20 of the latest products for the home page on load
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

// gets a specifics products details baised on its id
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

// gets all of the products in a specific category baised on its CategoryId (property on each product)
// this will get executed when the getCategory func from the CategoryCtrl gets executed in the pug template
// needs Event Listener!
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

// gets all products on key word search
module.exports.getSearchProduct = (req, res, next) => {
  let search = req.body.search;
  // jt found a nifty little widget from stack overflow
  search = search.charAt(0).toUpperCase() + search.slice(1);
  const { Product } = req.app.get('models');
  Product.findAll( { raw: true, where: { name: search } })
  .then( ( product ) => {
    res.send(JSON.stringify( product ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};


