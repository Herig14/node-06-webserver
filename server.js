const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
//Se establece el puerto asignado por el entorno, en este caso heroku,
//o en caso de ejecutarse en local se esteblece el puerto 300
const puerto = process.env.PORT || 3000;
//Se establece la carpeta public que será el directorio de la web
app.use(express.static(__dirname + '/public'));

//registrar la carpeta parciales
hbs.registerPartials(__dirname + '/views/parciales')

//Se establece como motor de plantillas en formato hbs
app.set('view engine', 'hbs');
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "hEriG",
        pagina: 'home'
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        pagina: 'about'
    });
});

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})