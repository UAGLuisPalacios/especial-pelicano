/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	cuenta: function (req, res) {
    res.view(null, {
        title: "Cuenta"
    });
  },
  registro: function (req, res) {
    res.view(null, {
        title: "Registro"
    });
  },
  lobby: function (req, res) {
    res.view(null, {
        title: "Lobby"
    });
  },
  editorial: function (req, res) {
    res.view(null, {
        title: "Editorial"
    });
  },
  publicacion: function (req, res) {
    res.view(null, {
        title: "Publicacion"
    });
  }
};

