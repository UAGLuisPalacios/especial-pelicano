/**
 * MiproyectoController
 *
 * @description :: Server-side logic for managing miproyectoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    res.view(null, {
        title: "Mi Proyecto"
    });
  }
};

