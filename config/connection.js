const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize('mysql://ddbbtaijjg2er3ml:dbf04f9t8g58b1w1@s465z7sj4pwhp7fn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/j8o6xwzc2hk609sy');
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;