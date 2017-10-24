'use strict';

// all categories populates the dom with an object list of all categories
// will need to be a pug template with an EL on it
module.exports.getAllCategories = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.findAll()
  .then( ( category ) => {
    res.send(JSON.stringify( category ));
    // res.render('product', { category });
  })
  .catch( ( err ) => {
    next( err );
  });
};

// get category gets the category by the id, is triggered when all categories runs
// in pug from this i need an Event Listener to route to getAllProductsInCategory
module.exports.getCategory = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.findOne({ raw: true, where: { id: req.params.id } })
  .then( ( category ) => {
    res.send(JSON.stringify( category ));
    // res.render('product', { category });
  })
  .catch( ( err ) => {
    next( err );
  });
};
