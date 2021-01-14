module.exports = (sequelize, Sequelize) => {
  const account = sequelize.define("accounts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phonenumber: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.BLOB
    }
  });

  return account;
};
