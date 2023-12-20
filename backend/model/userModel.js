const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },
  addedTime: {
    type: String,
    default: new Date(),
  },
});
const userDb = model("users", userSchema);
module.exports = { userDb };
