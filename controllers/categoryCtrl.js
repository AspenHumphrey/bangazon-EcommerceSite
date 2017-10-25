'use strict';

// all categories populates the dom with an object list of all categories
// will need to be a pug template with an EL on it this will call 
// currently only gets three products by categoryId... need to add quantity too
// In pug- name of obj . property to get to quantity bc thats a prop on product
// this will show on click of categories
module.exports.getAllCategoriesWithThreeProducts = (req, res, next) => {
  const { Category, Product } = req.app.get('models');
  Category.findAll({
    include: [{ model: Product, limit: 3, order: [['date_created', 'DESC']] }]
  })
  .then( ( category )=>{
    res.send(JSON.stringify( category ));
  })
  .catch( (err) => {
    next(err);
  });
};


// get category gets the category by the id, is triggered when 
// one category is clicked from the list of all categories with three products
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
