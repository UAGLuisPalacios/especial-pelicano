/**
* Revista.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		titulo: 'STRING',
  		mes: 'STRING',
        // Add a reference to Cuenta
        links:{
            collection: 'link',
            via: 'edicion'
        },
        actividades:{
            collection: 'actividad',
            via: 'edicion'
        },
        subproyectos:{
            collection: 'subproyecto',
            via: 'edicion'
        },
        serie: {
            model: 'suscripcion'
        }
  }
};

