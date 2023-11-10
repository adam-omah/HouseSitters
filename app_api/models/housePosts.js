const mongoose = require('mongoose');

const housePostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  days: {type: Number, default: 1, min: 1, max: 60},
  startDate: {type: Date, required: true},
  imageURL: {type: String, default: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
  address: {type: String, required: true},
  description: {type: String, required: true},
  dogs: [String],
  cats: [String],
  others: [String],
  applicants:{type: Number, default: 0, min: 0, max: 100},
  dayPosted:{type: Date, default: () => Date.now()}
});

mongoose.model('housePost', housePostSchema,'housePosts');
