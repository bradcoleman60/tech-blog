const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3010;

const sequelize =require('./config/connection');

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./controllers');

// const helpers = require('./utils/helpers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const exp = require('constants');

const sess = {
    secret: 'Super secret secret',
    // cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

  app.use(routes);

// Sync Sequelize to Database and Turn on Server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Techblog App is listening on port ${PORT}!`))
});


