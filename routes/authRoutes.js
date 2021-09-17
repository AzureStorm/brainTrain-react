const mongoose = require("mongoose");
const passport = require("passport");

const quest = mongoose.model("readingComprehesions");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
  });

  app.get("/api/current_user", async (req, res) => {
    res.send(req.user);
  });

  app.get("/api/find_questions", async (req, res) => {
    quest.find({}).exec((err, questions) => {
      res.send(questions);
    });
  });
};

{
  /** 
 

      const Quest = await new quest({
      a: "wron",
      b: "wronf",
      c: "wrsont",
      d: "wronsb",
      q: "wronbxcz",
      ans: "wronks",
      num: 1,
    });
    await Quest.save();
    res.redirect("/");

    __v: 0
*/
}
