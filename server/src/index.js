const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
///////
const cors = require('cors')
let corsOption = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))
////

//Settings
app.set('views', path.join(__dirname, 'views')); //Enfocar a express con la direccion del archivo index.js
app.set('port', process.env.PORT || 8000); //Setear el puerto del sistema operativo o el puerto 3000 como puerto principal

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Obtener datos del cliente (extended sirve para aceptar archivos adicionales)
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/user', require('./routes/index'));

//Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});