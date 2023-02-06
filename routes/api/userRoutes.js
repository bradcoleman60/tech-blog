const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

//Create new user

router.post("/", async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        return res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get("/", async (req, res) => {
    try{
    const users = await User.findAll();
    res.status(200).json(users)
    } catch (err) {
        res.status(400).json.apply(err)
    }
})

module.exports = router