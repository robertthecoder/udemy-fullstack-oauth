const express = require("express");
require("./models/User");
require("./services/passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys.js");
const passport = require("passport");

// const mongoose = require("mongoose");

// Client ID: (public token)
// 69767489038-ltsk2ikoqeftsdjk2mbvksr5o6h52300.apps.googleusercontent.com

// Client Secret: (private token - no one should see this)
// SXphEYrez_o3lVG6k4BAZrQH

// Passport lets you utilize google's auth syystem.
// Then we retrive the user details and store in our database.

// mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// call the function and pass in "app":
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`listening on ${PORT}`);
