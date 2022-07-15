const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    set: (password) => {
      console.log(password);

      const hashpassword = bcrypt.hashSync(password, 10);
      return hashpassword;
    },
  },

  token: { type: String },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
