const mongoose = require("mongoose");
const passport = require("passport");
const quest = mongoose.model("readingComprehesions");
const localy = mongoose.model("users");

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

  app.post("/api/register", (req, res) => {
    const local = new localy({
      email: req.body.data[0].email,
      acctName: `${req.body.data[0].acctName}`,
      password: req.body.data[0].password,
    });
    local.save();
    res.send("Thank you for registering!");
  });

  app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
      res.redirect("/");
    }
  );
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
