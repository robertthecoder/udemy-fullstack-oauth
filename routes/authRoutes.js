const passport = require("passport");

module.exports = app => {
  // routes "/auth/google" to the google strategy
  // we get profile and email information
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // We will have the "code" from the "/auth/google" call
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    console.log("printing out current user:");
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user + " signed out..");
  });
};
