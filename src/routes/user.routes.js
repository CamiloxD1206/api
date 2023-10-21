const express = require("express");
const userSchema = require("../models/user.model.js");

const router = express.Router();

//create user
router.post("/register", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get all user
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get user
router.get("/user/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update user
router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { name, lastname, age, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, lastname, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//remove user
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



module.exports = router;