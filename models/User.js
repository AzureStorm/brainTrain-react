const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  acctName: String,
  email: String,
  username: String,
  password: String,
});

mongoose.model("users", userSchema);
