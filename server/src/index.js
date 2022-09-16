const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');

const app = express();

//Settings
app.set('views', path.join(__dirname, 'views')); //Enfocar a express con la direccion del archivo index.js
app.engine('ejs', engine); 
app.set('view engine', 'ejs'); //Set ejs como motor de plantillas
app.set('port', process.env.PORT || 3000); //Setear el puerto del sistema operativo o el puerto 3000 como puerto principal

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Obtener datos del cliente (extended sirve para aceptar archivos adicionales)

//Routes
app.use('/', require('./routes/index'));

//Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});