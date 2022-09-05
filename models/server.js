const express = require('express');
const cors = require('cors');
class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    //Middelwares
    this.middlewares();
    //Rutas de mi app
    this.routes();
  }

  middlewares(){
    //CORS
    this.app.use(cors());

    //Parseo y lectura del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'));

  }//middlewares

  routes(){
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }//routes

  listen(){
    this.app.listen(this.port,()=>{
      console.log('Servidor corriendo en puerto', this.port);
    });
  }//listen

}

module.exports = Server;
