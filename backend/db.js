const { Sequelize } = require("sequelize");

const dbSequelize = new Sequelize("bdtestelocal", "aluno.ifal", "aluno.ifal", {
  dialect: "mysql",
  host: "localhost",
});

// const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize;
