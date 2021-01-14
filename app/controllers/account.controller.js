const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Account = db.account;

exports.accountrefresh = (req, res) => {
  Account.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      country: req.body.country,
      estado: req.body.estado,
    }
    ,{
    where: {
      id: 1
    }
  })
    .then(account => {
      if (!account) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.send({ message: "Actualizado" });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.accountselect = (req, res) => {
  Account.findOne({
    where: {
      id: 1
    }
  })
    .then(account => {
      if (!account) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send({
        id: account.id,
        firstname: account.firstname,
        lastname: account.lastname,
        email: account.email,
        phonenumber: account.phonenumber,
        country: account.country,
        estado: account.estado,
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.accountrefreshimage = (req, res) => {
  Account.update(
    {
      image: req.body.image,
    }
    ,{
    where: {
      id: 1
    }
  })
    .then(account => {
      if (!account) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.send({ message: "Actualizado" });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

