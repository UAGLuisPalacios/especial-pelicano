/**
 * RevistaController
 *
 * @description :: Server-side logic for managing revistas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next){
		var params = req.params.all();
		Revista.create(params, function(err,Revista){
			if (err) return next(err);

			//return res.redirect('/audiencia/create?titulo=MiAudiencia&datos='+ Revista.id);
			return res.redirect('/edicion/create?titulo='+ params.titulo +'&magazine='+ Revista.id);
		});
	}
};

