const { application } = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const quest = mongoose.model("readingComprehesions");
const localy = mongoose.model("users");
const quest2 = mongoose.model("secondSets");
const quest3 = mongoose.model("thirdSets");
const quest4 = mongoose.model("fourthSets");

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
    res.redirect("/");
  });

  app.get("/api/current_user", async (req, res) => {
    console.log("Hello");
    res.send(req.user);
    console.log(req.user);
  });

  app.get("/api/find_questions1", async (req, res) => {
    quest.find({}).exec((err, questions) => {
      res.send(questions);
    });
  });

  app.get("/api/find_questions2", async (req, res) => {
    quest2.find({}).exec((err, questions2) => {
      res.send(questions2);
    });
  });

  app.get("/api/find_questions3", async (req, res) => {
    quest3.find({}).exec((err, questions3) => {
      res.send(questions3);
    });
  });

  app.get("/api/find_questions4", async (req, res) => {
    quest4.find({}).exec((err, questions4) => {
      res.send(questions4);
    });
  });

  app.post("/api/register", function (req, res) {
    Users = new localy({ email: req.body.email, username: req.body.username });

    localy.register(Users, req.body.password, function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: ",
          err,
        });
      } else {
        res.json({ success: true, message: "Your account has been saved" });
      }
    });
  });

  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    }),
    function (req, res) {
      res.redirect("/");
    }
  );
};

{
  /**
   * 
   * 
   *  app.post("/api/register", (req, res) => {
    console.log(req.body);
    const local = new localy({
      email: req.body.data[0].email,
      acctName: `${req.body.data[0].acctName}`,
      password: req.body.data[0].password,
    });
    local.save();

    res.send(req.body);
  });

   * 
   * 
   * 
 app.post("/api/login", (req, res) => {
    console.log("req body ");
    console.log(req.body);
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/api/login",
    })(req, res);
  });
*/
}

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
