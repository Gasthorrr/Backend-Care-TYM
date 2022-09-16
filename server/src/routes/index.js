const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', (req, res, next) => {
    console.log(req.body); //Obtener valores que un formulario envia a nuestra API
    res.send('received');
});

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', (req, res, next) => {
    console.log(req.body);
    res.send('received');
});

module.exports = router;