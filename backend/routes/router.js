const express = require('express');
const app = express();

app
    .get('/', (req, res) => {
         res.send('Esto va a pedir todas las notas');
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