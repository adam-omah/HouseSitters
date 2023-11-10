const express = require('express');
const router = express.Router();

const ctrlHouse = require('../controllers/housePosts')
const ctrlHero = require('../controllers/heroes')

router
  .route('/housePosts')
  .get(ctrlHouse.housePostList)
  .post(ctrlHouse.housePostsCreate);

router
  .route('/housePosts/:housePostID')
  .get(ctrlHouse.housePostsReadOne);

router
  .route('/heroes/:heroID')
  .get(ctrlHero.heroReadOne);

router
  .route('/heroes')
  .get(ctrlHero.heroReadOne)
  .post(ctrlHero.heroCreate);


module.exports = router;
