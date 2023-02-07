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

// Entry.hasMany(Comment, {
//     foreignKey:
// })

// Comment.belongsTo(Entry)

module.exports = {User, Entry, Comment}