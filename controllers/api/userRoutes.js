const router = require('express').Router();
const bcrypt = require('bcrypt');

const {User, Entry, Comment} = require('../../models')

// Get All Users
router.get('/', async (req, res) => {
    
    const usersData = await User.findAll({
        include: [{model: Entry}, {model: Comment}]
        
    });
    
    return res.json(usersData);
    
})


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



module.exports = router