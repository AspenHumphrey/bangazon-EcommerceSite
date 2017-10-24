'use strict';

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

module.exports.getCategory = (req, res, next) => {
  const { Category } = req.app.get('models');
  Category.findOne({ raw: true, where: { id: req.params.id }, attributes: {} })
  .then( ( category ) => {
    res.send(JSON.stringify( category ));
    // res.render('product', { category });
  })
  .catch( ( err ) => {
    next( err );
  });
};
