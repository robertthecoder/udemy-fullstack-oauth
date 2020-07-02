const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys.js");

// Client ID: (public token)
// 69767489038-ltsk2ikoqeftsdjk2mbvksr5o6h52300.apps.googleusercontent.com

// Client Secret: (private token - no one should see this)
// SXphEYrez_o3lVG6k4BAZrQH

// Passport lets you utilize google's auth syystem.
// Then we retrive the user details and store in our database.

mongoose.connect(keys.mongoURI);

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
      console.log(refreshToken);
    }
  )
);

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`listening on ${PORT}`);
