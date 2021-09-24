const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  googleId: String,
  acctName: String,
  email: String,
  username: { type: String, unique: true, required: true },
});

userSchema.plugin(passportLocalMongoose);

mongoose.model("users", userSchema);
