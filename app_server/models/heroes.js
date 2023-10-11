const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  eircode: {type: String, required: true}
});

mongoose.model('hero', heroSchema);
