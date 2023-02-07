const router = require('express').Router();
const sequelize = require('../../config/connection');

const {User, Entry, Comment} = require('../../models')

// Get all entries
router.get("/", async (req, res) => {
    const entries = await Entry.findAll({
        include: [{model: User}]
    });
    return res.json(entries)
    
});
///
// try{
//     const entries = await Entry.findAll({
//         include: [{model: User}]
//     });
//     res.status(200).json(entries)
//     } catch (err) {
//         res.status(400).json.apply(err)
//     }
// });



// Get entry by ID
router.get("/:id", async (req, res) => {
    try{
    const entries = await Entry.findByPk(req.params.id);
    res.status(200).json(entries)
    } catch (err) {
        res.status(400).json.apply(err)
    }
});

// Post a new Entry
router.post("/", async (req, res) => {
    try{
    const newEntry = req.body;
    const entryData = await Entry.create(newEntry);
    return res.status(200).json(entryData)
    } catch (err) {
        res.status(400).json.apply(err)
    }
});


// Update an exiting entry
router.put("/:id", async (req, res) => {
    try{
    const updatedEntry = req.body;
    const entryData = await Entry.update(updatedEntry, {
        where: {id: req.params.id} // probably need to add a user_id here to
    });
    return res.status(200).json(entryData)
    } catch (err) {
        res.status(400).json.apply(err)
    }
})

// Update an exiting entry
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