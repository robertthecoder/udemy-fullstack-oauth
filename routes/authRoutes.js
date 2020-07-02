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
};
