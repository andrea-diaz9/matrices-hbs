const express = require('express') 
const { conexion_db } = require('../config/DB.JS')
const router = express.Router() 
//const inicio = require('../controllers/ctrl_inicio') 



// Inicio 
 router.post('/opera',   async (req, res) => {
    console.log('hoal')

    console.log(req.body)
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
        console.log(resultado)
        res.json({resultado})
     } catch (error) {
         console.log('Error al guardar la operacion.', error)
    } 
})

module.exports = router 