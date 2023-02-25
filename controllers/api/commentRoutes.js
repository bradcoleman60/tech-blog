//Define required middleware and models
const router = require('express').Router();
const {User, Entry, Comment} = require('../../models')

// Get all Comments
router.get("/", async (req, res) => {
    const entries = await Comment.findAll({
        include: [{model: Entry}, {model: User}]
    });
    return res.json(entries)
    
});

// Get comment by ID
router.get("/:id", async (req, res) => {
    try{
    const entries = await Comment.findByPk(req.params.id);
    res.status(200).json(entries)
    } catch (err) {
        res.status(400).json.apply(err)
    }
});

// Post a new comment 
router.post("/", async (req, res) => {
    try{
    const newEntry = req.body;
    const entryData = await Comment.create({
        comment_author: req.body.comment_author,
        entry_id: req.body.entry_id,
        comment_text: req.body.comment_text
    });
    return res.status(200).json(entryData)
    } catch (err) {
        res.status(400).json.apply(err)
    }
});

// Update an exiting comment
router.put("/:id", async (req, res) => {
    try{
    const updatedEntry = req.body;
    const entryData = await Comment.update(updatedEntry, {
        where: {id: req.params.id} 
        });
    return res.status(200).json(entryData)
    } catch (err) {
        res.status(400).json.apply(err)
    }
})

// Delete an exiting comment
router.delete("/:id", async (req, res) => {
    try{
    const entryData = await Comment.destroy({
        where: {id: req.params.id} 
        });
    return res.status(200).json(req.body)
    } catch (err) {
        res.status(400).json.apply(err)
    }
})

module.exports = router