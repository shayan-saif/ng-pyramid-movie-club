var mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var Schema = mongoose.Schema;

const userSchema = new Schema({
    // id
    username: String,

    password: String,

    permission: Object,

    joinDate: Date
});


userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
