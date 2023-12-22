const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
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
  role: {
    type: String,
    default: "user",
  },
  addedTime: {
    type: String,
    default: new Date(),
  },
});
const userDb = model("users", userSchema);
module.exports = { userDb };
