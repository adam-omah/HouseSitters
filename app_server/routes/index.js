const express = require('express');
const router = express.Router();


const ctrlLogin = require('../controllers/login')
const ctrlHouse = require('../controllers/housePosts')

/* Login pages */

router.get('/login', ctrlLogin.loginPage);
router.get('/register', ctrlLogin.registerPage);

/* Heroes pages */
router.get('/', ctrlHouse.housePosts);




module.exports = router;
