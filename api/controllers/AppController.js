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
  editor: function (req, res) {
    res.view(null, {
        title: "Editor"
    });
  },
  suscripcion: function (req, res) {
    res.view(null, {
        title: "Suscripcion"
    });
  }
};

