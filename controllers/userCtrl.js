'use strict';

module.exports.getUserAccount = (req, res, next) => {
  console.log("user?");
  const { User } = req.app.get('models');
  User.findOne({ raw: true, where: { id: req.params.id } })
  .then( ( user ) => {
    res.send(JSON.stringify( user ));
    // res.render('product', { user });
  })
  .catch( ( err ) => {
    next( err );
  });
};