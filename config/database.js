module.exports = function(uri){

  var mongoose = require('mongoose');

  mongoose.connect(`mongodb://${uri}`);

  mongoose.connection.on('connected', () => console.log('Conectado ao mongo'));

  mongoose.connection.on('error', error => console.log(`erro na conexão ${error}`));


mongoose.connection.on('disconnectd', () => console.log('desconectado do mongo'));

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log('aplicação terminada, conexão desfeita');
    process.exit(0);
  })
})

}
