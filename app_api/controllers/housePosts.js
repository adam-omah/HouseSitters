/* Request API parts */
const request = require('request');
const mongoose = require('mongoose');
const houseMode = require('../models/housePosts');

const Post = mongoose.model('housePost');

const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://wsrender.onrender.com';
}


const housePostList = function(req, res) {
  let housePosts = [];
  Post.find({})
  .then((result, err) => {
    if (err) {
      res
      .status(400)
      .json(err);
    } else {
      res
      .status(200)
      .json(result);
      housePosts = result;
    }
  });
  return housePosts;
};


const housePostsReadOne = function (req, res) {
    Post
      .findById(req.params.housePostID)
      .then((housePosts,err) => {
      res
      .status(200)
      .json(housePosts);
      });
};

const housePostsCreate = function (req, res) {
	console.log(req.body.title);
  Post.create({
    title: req.body.title,
    days: req.body.days,
    startDate: req.body.startDate,
    imageURL: req.body.imageURL,
    address: req.body.address,
    description: req.body.description,
    dogs: req.body.dogs,
    cats: req.body.cats,
    others: req.body.others,
    applicants: parseInt(req.body.applicants),
    dayPosted: req.body.dayPosted
  }).then((housePosts, err) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(housePosts);
    }
  });
};


module.exports = {
housePostsCreate,
housePostsReadOne,
housePostList

};
