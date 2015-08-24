/**
* Subproyecto.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	titulo: 'STRING',
  	objetivo: 'STRING',
  	tablero: 'STRING',
        // Add a reference to Revistas
        edicion: {
            model: 'revista'
        }
  }
};

