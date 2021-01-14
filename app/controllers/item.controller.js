const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Account = db.account;
const Item = db.item;

exports.itemadd = (req, res) => {
  Item.create({
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    marca: req.body.marca,
    modelo: req.body.modelo,
    tipo: req.body.tipo,
    color: req.body.color,
    serie: req.body.serie,
    estado: req.body.estado
  }).then( response => {
    if (!response) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.send({ message: "Actualizado" });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.itemupdate = (req, res) => {
  Item.update(
    {
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      marca: req.body.marca,
      modelo: req.body.modelo,
      tipo: req.body.tipo,
      color: req.body.color,
      serie: req.body.serie,
      estado: req.body.estado
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(item => {
    if (!item) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.send({ message: "Actualizado" });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.itemselectionone = (req, res) => {
  Item.findOne({
    where: {
      id: 1
    }
  }).then(response => {
    if (!response) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.send({ message: "Actualizado" });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.itemselectionall = (req, res) => {
  Item.findAll()
    .then(response => {
      if (!response) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send(response);
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.itemdeleted = (req, res) => {
  Item.destroy({
    where: {
      id: req.body.id
    }
  }
  ).then(response => {
    if (!response) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.status(200).send(response);
  }).catch(err => {
    res.send({ message: err.message });
  });
};
exports.itemsearch = (req, res) => {

};
