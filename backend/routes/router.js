const express = require('express');
const app = express();

app
    .get('/', (req, res) => {
         res.send({titulo: 'hola', contenido: 'adiós'});
    })
    .get('/nota/:id', (req, res) => {
        res.send('Esto va a mostrar una sola nota.');
    })
    .post('/', (req, res) => {
        res.redirect('/');
    })
    .delete('/nota/:id', (req, res) => {
        res.redirect('/');
    });



module.exports = app;