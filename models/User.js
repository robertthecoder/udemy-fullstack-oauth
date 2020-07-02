const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  googleId: String
});

//mongoose does not overwrite schemas, only creates if dne
mongoose.model("users", userSchema);
