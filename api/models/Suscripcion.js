/**
* Suscripcion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        titulo: 'STRING',
        // Add a reference to Cuenta
        miembros: {
            model: 'cuenta'
        },
        // Add a reference to Editores
        editores: {
            model: 'editor'
        }
  }
};

