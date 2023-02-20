const router = require('express').Router();
const sequelize = require('../../config/connection');

const {User, Entry, Comment} = require('../../models')

// Get all entries
router.get("/", async (req, res) => {
    const entries = await Entry.findAll({
        include: [{model: User}, {model: Comment }]
    });
    return res.json(entries)
    
});


// Get entry by ID
router.get("/:id", async (req, res) => {
    try{
    const entries = await Entry.findByPk(req.params.id, {include: [{model: User}, {model: Comment , include : [{model: User }]} ]});
    
    res.status(200).json(entries)
    } catch (err) {
        res.status(400).json.apply(err)
    }
});


// Post a new Blog Entry ////////////
router.post("/", async (req, res) => {
    
    try{
    const newEntry = req.body;
    
    const entryData = await Entry.create({
        author_id: req.body.author_id,
        blog_title: req.body.entry_title,
        blog_text: req.body.entry_text
    });
    return res.status(200).json(entryData)
    } catch (err) {
        res.status(400).json.apply(err)
    }
});



// Update an exiting entry
router.put("/:id", async (req, res) => {
    try{
    const updatedEntry = req.body;
    console.log("THIS IS FROM THE req.body" ,updatedEntry)
    console.log("this is the entry id:", parseInt(req.body.id))
    const entryData = await Entry.update(updatedEntry, {
        where: {id: parseInt(req.body.id)} // probably need to add a user_id here to
    });
    return res.status(200).json(entryData)
    } catch (err) {
        res.status(400).json.apply(err)
    }
})

// Delete an exiting entry
router.delete("/:id", async (req, res) => {
    try{
    const entryData = await Entry.destroy({
        where: {id: req.params.id} 
        });
    return res.status(200).json(req.body)
    } catch (err) {
        res.status(400).json.apply(err)
    }
})

module.exports = router