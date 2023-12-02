const express = require('express');
const router = express.Router();

const passport = require('passport');
const Account = require('../../app_api/models/account');


const ctrlLogin = require('../controllers/login')
const ctrlHouse = require('../controllers/housePosts')

/* Login pages */

router.get('/login', ctrlLogin.loginPage);
router.get('/register', ctrlLogin.registerPage);

/* HousePost pages */
router.get('/', ctrlHouse.housePosts);


/* Passport Integration */
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }else {
          res.status(202);
        }

    });
});

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

    });
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/register2', (req, res) => {
    res.render('register', { });
});

router.post('/register2', (req, res, next) => {
    Account.register(new Account({
      username : req.body.email,
      name: req.body.name,
      eircode: req.body.eircode,
      phone: req.body.phone
     }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }else{
          res
          .status(200)
          .json(account);
        }
    });
});


// passport registration call.
// router.post('/register', (req, res, next) => {
//   console.log(req.body.title);
//   Account.register(new Account({
//     username: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     phone: req.body.phone,
//     eircode: req.body.eircode,
//   }), req.body.password, (err, account) => {
//           if (err) {
//             // return res.render('registration-page', { error : err.message });
//             console.log(err);
//           }
//         }
//       );
// });


module.exports = router;
