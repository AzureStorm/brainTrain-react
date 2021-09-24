const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local").Strategy;
const keys = require("../config/keys");
const passportLocalMongoose = require("passport-local-mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      console.log("hey!");

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: profile.id,
        username: profile.displayName,
      }).save();
      done(null, user);
    }
  )
);

passport.use(User.createStrategy());

{
  /** 
   * 
   * 
   * 
   * 
   * 
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.log(err);
        return done(err, false, { message: err });
      }
      if (!user) {
        console.log("Wrong user");
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password != password) {
        console.log("Wrong pass");
        return done(null, false, { message: "Incorrect password." });
      }
      console.log("done");
      return done(null, user);
    });
  })
);
*/
}
