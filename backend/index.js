const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();
// Settings 
app.set('port', process.env.PORT || 8080);


// Middlewares

app.use(morgan('tiny'));

// Routes
app.use('/api/', require('./routes/router'));

app.get('/', (req, res) => {
    res.send('hola');
})

app.get('*', (req, res) => {
    res.send('404')
})
app.listen(app.get('port'), () => console.log('Aplicación funcionando en el puerto %s', app.get('port')));