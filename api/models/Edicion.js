/**
* Edicion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	titulo: 'STRING',
  	magazine: {
            model: 'revista'
        },
        links: {
            collection: 'link',
            via: 'publicacion'
        },
        actividades: {
            collection: 'actividad',
            via: 'publicacion'
        },
        subproyectos: {
            collection: 'subproyecto',
            via: 'publicacion'
        }
  }
};

