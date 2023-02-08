//Import models
const User = require('./User');
const Entry = require('./Entry');
const Comment = require('./Comment');

// const { Model } = require('sequelize');

//Users have many entries and entries belong to users

User.hasMany(Entry, {
    foreignKey: 'author_id',
});

Entry.belongsTo(User, {
    foreignKey: 'author_id',
});

// Entry has many comments

Entry.hasMany(Comment, {
    foreignKey:'entry_id'
})

Comment.belongsTo(Entry, {
    foreignKey: 'entry_id'
})

//User has many comments
User.hasMany(Comment, {
    foreignKey: 'author'
})

Comment.belongsTo(User,{
    foreignKey: 'author'
})

module.exports = {User, Entry, Comment}