const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "postgres",
  port: 5433,
  host: "localhost",
  username: "postgres",
  password: "ruut",
  dialect: "postgres",
});

module.exports = db;