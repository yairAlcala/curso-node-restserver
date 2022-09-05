const {response} = require('express');

const usuariosGet = (req, res = response)=> {
  const {q, nombre="No name", apikey, page=1, limit} = req.query;
  res.json({
    msg: 'Petición get API | Controller',
    q,
    nombre,
    apikey,
    page,
    limit
  });
};

const usuariosPost = (req, res = response)=> {
  const {nombre,edad} = req.body;
  res.status(201).json({
    msg: 'Petición post API | Controller',
    nombre,
    edad
  });
};

const usuariosPut = (req, res = response)=> {
  const id = req.params.id;
  res.json({
    msg: 'Petición put API | Controller',
    id
  });
};

const usuariosPatch = (req, res = response)=> {
  res.json({
    msg: 'Petición patch API | Controller'
  });
};

const usuariosDetele = (req, res = response)=> {
  res.json({
    msg: 'Petición delete API | Controller'
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDetele,
}
