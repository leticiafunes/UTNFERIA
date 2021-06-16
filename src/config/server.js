const express = require ('express');
const path= require ('path');
const bodyParser = require ('body-parser');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000 );

//Motos de Plantilla
app.set ('view engine', 'ejs');
app.set ('views', path.join (__dirname, '../appviews'));

//middleware

app.use (bodyParser.urlencoded({extended:false}));
module.exports = app;