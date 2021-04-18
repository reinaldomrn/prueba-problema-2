const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.timesPath = '/api/time';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        //leer y parsear el body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.timesPath, require('../routes/time'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
