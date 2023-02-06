//Import models
const User = require('./User');
const Entry = require('./Entry');
const { Model } = require('sequelize');

//Users have many entries and entries belong to users

User.hasMany(Entry, {
    foreignKey: 'author'
});

Entry.belongsTo(User, {
    // Should this "user_name"?
    foreignKey: 'author'
});

Model.exports = {User, Entry}