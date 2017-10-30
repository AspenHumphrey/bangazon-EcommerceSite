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
    // res.render('category', { category });
  })
  .catch( (err) => {
    next(err);
  });
};


// get category gets the category by the id, with the name of the category
module.exports.getCategory = (req, res, next) => {
  const { Category, Product } = req.app.get('models');
  Category.findAll({ 
    raw: true, where: { id: req.params.id }, include: [{ model: Product }]
   })
  .then( ( category ) => {
    res.send(JSON.stringify( category ));
    // res.render('category', { category });
  })
  .catch( ( err ) => {
    next( err );
  });
};
