/**
 * SuscripcionController
 *
 * @description :: Server-side logic for managing suscripcions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    res.view(null, {
        title: "Suscripcion"
    });
  }
};

