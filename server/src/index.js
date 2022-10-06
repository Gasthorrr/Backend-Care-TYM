const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')
const verifyToken = require('./routes/validation-session')

///////
let corsOption = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))
////

//Settings
app.set('views', path.join(__dirname, 'views')); //Enfocar a express con la direccion del archivo index.js //eliminar?
app.set('port', process.env.PORT || 8000); //Setear el puerto del sistema operativo o el puerto 3000 como puerto principal //reemplazar por .env

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Obtener datos del cliente (extended sirve para aceptar archivos adicionales)
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/login',require("./routes/login"));
app.use('/api/chain',require('./routes/chain'));
app.use('/api/center',require('./routes/center'));
app.use('/api/medic', require('./routes/medic'));
app.use('/api/coordinator', require('./routes/coordinator'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/specialty', require('./routes/specialty'));

//Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});