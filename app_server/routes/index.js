const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/main');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

const ctrlLogin = require('../controllers/login')


// /* GET home page. */
// router.get('/', ctrlMain.index);

/* Locations pages */
router.get('/', ctrlLogin.loginPage);
router.get('/register', ctrlLogin.registerPage);

/* Other pages */
router.get('/about', ctrlOthers.about);


module.exports = router;
