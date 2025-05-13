/* const express = require('express')

const hbs = require("hbs");
const { conexion_db } = require('./sis/config/DB.JS');
 
const app = express();

app.use(express.static('assets')); 
app.set("view engine", "hbs")


app.get('/', (req, res) => {
    res.render('calculadora'); 
});



/*  const getOperaciones = async() =>{
    try {
        await conexion_db()
        console.log('Operaciones listadas!')
    } catch(err) {
        console.log(err)
    }
}
getOperaciones() // 

app.post('/guardar_operacion', async (req, res) => {
    console.log('hoal')
    const { operacionJSON, matrizAjson, matrizBjson, resultadoJSON } = req.body

    try {
        const pool = await conexion_db()
        const resultado = await pool.request()
        .input('tipoOp', sql.NVarChar, operacionJSON)
        .input('matrizA', sql.NVarChar, matrizAjson)
        .input('matrizB', sql.NVarChar, matrizBjson)
        .input('resultado', sql.NVarChar, resultadoJSON)
        .query(`
            INSERT INTO operaciones (tipoOp, matrizA, matrizB, resultado)
            VALUES (@tipoOp, @matrizA, @matrizB, @resultado)`)
    } catch (error) {
        console.log('Error al guardar la operacion.', error)
    }
})

console.log(conexion_db())

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
}); */

const express = require('express') 
const path = require('path') 
const app = express() 
// const fileUpload = require('express-fileupload') 
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