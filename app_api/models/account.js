const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({

    name: String,
    username: String,
    password: String,
    eircode: String,
    phone: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
