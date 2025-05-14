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
        console.log('Inserción completada')
    } catch (error) {
        console.log('Error al guardar la operacion.', error)
    } 
})

module.exports = router 