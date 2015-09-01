/**
 * AudienciaController
 *
 * @description :: Server-side logic for managing audiencias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next){
		var params = req.params.all();
		Audiencia.create(params, function(err,Audiencia){
			if (err) return next(err);

			return res.redirect('/equipo/create?titulo=MiEquipo&datos='+ params.datos);
		});
	}
};

