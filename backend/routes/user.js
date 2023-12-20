const { Router } = require("express");
const { userDb } = require("../model/userModel");
const user = Router();
const { userValidation } = require("../validation/userValidation");
// get users
user.get("/allusers", async (req, res) => {
  let users = await userDb.find();
  if (!users.length) {
    return res
      .status(404)
      .json({ msg: "users are not found", innerData: users });
  }
  res.status(200).json({ msg: "users are found ", innerData: users });
});

//create user
user.post("/create", [userValidation], async (req, res) => {
  let newUser = req.body;
  let exactuser = await userDb.findOne({ username: newUser.username });
  if (exactuser) {
    return res.status(400).json({
      msg: `${newUser.username} already exists`,
      innerData: null,
    });
  }
  let userone = await userDb.create(newUser);
  let savedUser = await userone.save();
  res.status(201).json({ msg: "user is created ", innerData: savedUser });
});

user.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let deletedUser = await userDb.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(404).json({ msg: "user is not found", innerData: null });
  }
  res.send({ msg: "user is deleted", innerData: deletedUser });
});

// update user
user.put("/update/:id", async (req, res) => {
  let { id } = req.params;
  let updatedUser = req.body;
  let updateUser = await userDb.findByIdAndUpdate(id, updatedUser);
  if (!updateUser) {
    return res.send({ msg: "user is not found", innerData: null });
  }
  res.send({ msg: "user is updated succesfully", innerData: updateUser });
});
// check email

user.get("/search", async (req, res) => {
  let { email } = req.query;
  let findUser = await userDb.findOne({ email: email });
  if (!findUser) {
    return res.send({
      success: false,
      msg: "user is not found",
      innerData: null,
    });
  }
  res
    .status(200)
    .json({ success: true, msg: "user is found", innerData: findUser });
});

module.exports = { user };
