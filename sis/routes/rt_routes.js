const express = require('express') 
const { conexion_db } = require('../config/DB.JS')
const router = express.Router() 
const sql = require("mssql");

// Inicio 
router.post('/opera',   async (req, res) => {
    const { matrizAjson, matrizBjson,  operacionJSON, resultadoJSON } = req.body
    try {
        let  pool = await conexion_db()
        const resultado = await pool.request()
        .input('matrizA', sql.NVarChar, matrizAjson)
        .input('matrizB', sql.NVarChar, matrizBjson)
        .input('tipoOp', sql.NVarChar, operacionJSON)
        .input('resultado', sql.NVarChar, resultadoJSON)
        .query(`INSERT INTO operaciones ( matrizA, matrizB, tipoOp, resultado)`+
        `VALUES ( @matrizA, @matrizB, @tipoOp,@resultado)`)
        res.json({resultado})
    } catch (error) {
        console.log('Error al guardar la operacion.', error)
    } 
})

module.exports = router 