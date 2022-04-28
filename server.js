
const sequelize = require('./config/connection');const express = require("express");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 8080;
const api = require('./controllers');
const bodyParser = require('body-parser');

router.use(api);
app.use(bodyParser.json());
app.use("/", express.static("public"));

app.use(router);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Server Listening on Port 8080. Type Command C or Ctrl C to quit"));    
}).catch(err => console.log(err));
