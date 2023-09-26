const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/main');
// const ctrlLocations = require('../controllers/locations');
// const ctrlOthers = require('../controllers/others');

const ctrlLogin = require('../controllers/login')
const ctrlHouse = require('../controllers/housePosts')

// /* GET home page. */
// router.get('/', ctrlMain.index);

/* Login pages */
router.get('/', ctrlLogin.loginPage);
router.get('/register', ctrlLogin.registerPage);

/* Heroes pages */
router.get('/heroes', ctrlHouse.housePosts);


module.exports = router;
