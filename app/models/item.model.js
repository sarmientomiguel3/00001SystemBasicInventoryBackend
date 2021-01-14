module.exports = (sequelize, Sequelize) => {
  const item = sequelize.define("items", {
    id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    codigo: {
      type: Sequelize.STRING
    },
    nombre: {
      type: Sequelize.STRING
    },
    marca: {
      type: Sequelize.STRING
    },
    modelo: {
      type: Sequelize.STRING
    },
    tipo: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
    serie: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.STRING
    }
  });

  return item;
};
