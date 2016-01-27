var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
        name: String,
        username: String,
        password: String,
        email: String,
        confirmed: String,
        xp: Number,
        privateacc: String,
        admin: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
