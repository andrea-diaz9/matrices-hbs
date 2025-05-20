const express = require('express') 
const { conexion_db } = require('../config/DB.JS')
const router = express.Router() 
const sql = require("mssql");

// Inicio 
router.post('/opera',   async (req, res) => {
    const { ordenAjson, matrizAjson, ordenBjson, matrizBjson, operacionJSON, resultadoJSON, ordenRes } = req.body
    try {
        let  pool = await conexion_db()
        const resultado = await pool.request()
        .input('ordenA', sql.NVarChar, ordenAjson)
        .input('matrizA', sql.NVarChar, matrizAjson)
        .input('ordenB', sql.NVarChar, ordenBjson)
        .input('matrizB', sql.NVarChar, matrizBjson)
        .input('tipoOp', sql.NVarChar, operacionJSON)
        .input('ordenR', sql.NVarChar, ordenRes)
        .input('resultado', sql.NVarChar, resultadoJSON)
        .query(`INSERT INTO operaciones ( ordenA, matrizA, ordenB, matrizB, tipoOp, ordenR, resultado)`+
        `VALUES ( @ordenA, @matrizA, @ordenB, @matrizB, @tipoOp, @ordenR, @resultado)`)
        res.json({resultado})
        console.log('se guardó en BD')
    } catch (error) {
        console.log('Error al guardar la operacion.', error)
    } 
})

router.get('/', async(req,res) => {
    try{
        const pool = await conexion_db()

        const resultado = await pool.request().query("SELECT idOp, ordenA, matrizA, ordenB, "
            +"matrizB, tipoOp, ordenR, resultado,"
            +"FORMAT(fechaOp, 'dd/MM/yyyy HH:mm') AS fechaOp FROM operaciones ORDER BY idOp DESC;")

        const datos = resultado.recordset
        console.log('datos mostrados')
        res.render('calculadora', {
            title: 'Historial',
            datos: datos
        })
    }catch(err){
        console.error('error en query', err)
        throw err
    }
})


console.log ('conexion en routes: ', conexion_db)

module.exports = router 