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
app.use('/api/admin/chain',verifyToken,require('./routes/chain'));
app.use('/api/chain/center',verifyToken,require('./routes/center'));
app.use('/api/center/medic',verifyToken, require('./routes/medic'));
app.use('/api/center/coordinator',verifyToken, require('./routes/coordinator'));
app.use('/api/center/specialty',verifyToken, require('./routes/specialty'));
app.use('/api/medic/attention_block',verifyToken, require('./routes/attentionBlock'));

//Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});