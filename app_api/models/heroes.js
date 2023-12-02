const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const Hero = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  eircode: {type: String, required: true}
});

Hero.plugin(passportLocalMongoose);

mongoose.model('hero', Hero);
