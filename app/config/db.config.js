module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "post3006",
  DB: "my_database",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
