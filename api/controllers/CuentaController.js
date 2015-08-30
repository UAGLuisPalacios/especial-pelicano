/**
 * CuentaController
 *
 * @description :: Server-side logic for managing cuentas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res, next){
		var params = req.params.all();
		Cuenta.create(params, function(err,cuenta){
			if (err) return next(err);

			return res.redirect('/perfil/create?titulo=MiPerfil&datos='+ cuenta.id);
		});
	},
	upgrade: function(req,res,next){
		var criteria = {};

		criteria = _.merge({}, req.params.all(), req.body);

		var id = req.param('id');

		if (!id) {
			return res.badRequest('No id provided.');
		}

		Cuenta.update (id, criteria, function(err,cuenta) {

			if (cuenta.length === 0) return res.notFound();

			if(err) return next(err);

			return res.redirect('/editor/create?titulo=SoyPro&datos='+ id);

		});

	}


};

