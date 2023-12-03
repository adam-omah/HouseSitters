const mongoose = require('mongoose');
const houseMode = require('../models/heroes');

const Hero = mongoose.model('hero');

const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://house-sitters.onrender.com';
}

const heroReadOne = function (req, res) {
    Hero
      .findById(req.params.heroID)
      .then((hero,err) => {
      res
      .status(200)
      .json(hero);
      });
};

const heroCreate = function (req, res) {
	console.log(req.body.title);
  Hero.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    eircode: req.body.eircode,
  }).then((heroes, err) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(heroes);
    }
  });
};

const heroesList = function(req, res) {
  let heroes = [];
  req.body.forEach((doc) => {
    heroes.push({
      name: doc.obj.name,
      email: doc.obj.email,
      password: doc.obj.password,
      phone:doc.obj.phone,
      eircode: doc.obj.eircode,
      _id: doc.obj._id
    });
  });

  res
    .status(200)
    .json(heroes);
};

module.exports = {
heroReadOne,
heroCreate,
heroesList
};
