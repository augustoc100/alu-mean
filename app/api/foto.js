var api = {};

var fotos = [
     {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
     {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
 ];

api.lista = function(req, res){


   res.json(fotos);

};

api.buscaPorId = function(req, res){
  console.log(req.params.id);
var foto = fotos.find(function(foto){
  return foto._id == req.params.id
});
res.json(foto);
}


api.cadastra =function(req, res){
let foto = req.body;
let contId = fotos.length;
foto._id = ++contId;
fotos.push(foto);
res.json(foto)

}


api.atualiza =function(req, res){
let fotoId = req.params.id;
let foto = req.body;
let indice = fotos.findIndex(function(foto){
  return foto._id == fotoId;
});

fotos[indice] = foto;
res.sendStatus(200);

}

api.remove = function(req, res){
  fotos = fotos.filter(function(foto){
    return foto._id != req.params.id;
  });
  console.log("foto removida com sucesso")
  res.sendStatus(204);
}

module.exports = api;
