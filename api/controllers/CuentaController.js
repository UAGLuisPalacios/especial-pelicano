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
	}
};

