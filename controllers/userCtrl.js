'use strict';

module.exports.getUserAccount = (req, res, next) => {

  const { User, PaymentType } = req.app.get('models');
    User.findOne({ 
      raw: true, where: { id: req.params.id } 
    })
    .then( ( user ) => {
      PaymentType.findAll({ 
        raw: true, where: { userId: req.params.id } 
      })
      // res.send(JSON.stringify( { user } ));
      .then( ( paymentType ) => {
        // res.send(JSON.stringify( { user, paymentType } ));
        res.render('user', { user, paymentType });
        })
        .catch( ( err ) => {
          next( err );
        });
      });
};

// gets a specifics user baised on its id
module.exports.getOneUser = (req, res, next) => {
  
    const { User, PaymentType } = req.app.get('models');
      User.findOne({ 
        raw: true, where: { id: req.params.id } 
      })
      .then( ( user ) => {
        PaymentType.findAll({ 
          raw: true, where: { userId: req.params.id } 
        })
        // res.send(JSON.stringify( { user } ));
        .then( ( paymentType ) => {
          // res.send(JSON.stringify( { user, paymentType } ));
          res.render('edit-user', { user, paymentType });
          })
          .catch( ( err ) => {
            next( err );
          });
        });
  };

module.exports.getUpdateUser = (req, res, next) => {
  const { User } = req.app.get('models');
    User.update({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      username:req.body.username
    }, 
      {raw: true, where:{id: req.params.id} 
    })
     .then( ( user ) => {
         console.log('user??', user[0]);
      res.redirect('/welcome');
     } )
    .catch( (err) => {
      next(err); 
    });
};
