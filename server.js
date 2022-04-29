const path = require('path');
const sequelize = require('./config/connection');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server Listening at http://localhost:${PORT} 🚀. Type Command C or Ctrl C to quit`));    
}).catch(err => console.log(err));
