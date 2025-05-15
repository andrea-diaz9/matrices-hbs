const express = require('express') 
const path = require('path') 
const app = express() 
const hbs = require('hbs') 
//const mdwConfigLogin = require('./sis/config/db.js') 

// PUERTO 
const port = 3000 

// GENERALES 
// app.use(fileUpload({createParentPath: true})); 
app.use(express.urlencoded({extended: false})); 
app.use(express.json({limit: '800mb'})) 

// VISTAS 
app.set('views', __dirname + '/views') 
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, `/views`)) 
hbs.registerPartials(path.join(__dirname, `./views/partials`)); 
hbs.registerPartials(path.join(__dirname, `./views`)); 
//require(`./sis/extras/helpers`) 

// ARCHIVOS ESTATICOS 
app.use(express.static(path.join(__dirname, './assets'))) 

//SESION 
//app.use(mdwConfigLogin()) 

// RUTAS 
app.use(require(`./sis/routes/rt_index`)) 

// SERVIDOR 
app.listen(port, () => console.log(`Escuchando el puerto ${port}`)); 