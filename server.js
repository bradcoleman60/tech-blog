const exp = require('constants');
const express = require('express');
const sequelize =require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3010;

//make sure to add process.env for the database connection too!!!

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

// Sync Sequelize to Database and Turn on Server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Techblog App is listening on port ${PORT}!`))
});


