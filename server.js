
const express = require('express')
const hbs = require("hbs")
/* const { db_conn } = require('./sis/config/DB.JS') */
 
const app = express();

app.use(express.static('assets')); 
/* app.use(express.json()) */
app.set("view engine", "hbs")


app.get('/', (req, res) => {
    res.render('calculadora'); 
});

/* app.post('/guardar-operacion', async (req, res) => {
    const { operacionJSON, matrizAjson, matrizBjson, resultadoJSON } = req.body;

    try {
        const pool = await db_conn(); // Llama a db_conn y espera la conexión.
        console.log('pool de conexion', pool)
        // Realiza la consulta
        const result = await pool.request()
            .input('tipoOp', sql.NVarChar, operacionJSON)
            .input('matrizA', sql.NVarChar, matrizAjson)
            .input('matrizB', sql.NVarChar, matrizBjson)
            .input('resultado', sql.NVarChar, resultadoJSON)
            .query(`
                INSERT INTO operaciones (tipoOp, matrizA, matrizB, resultado)
                VALUES (@tipoOp, @matrizA, @matrizB, @resultado)
            `);

        res.status(200).json({ success: true, rowsAffected: result.rowsAffected });
    } catch (err) {
        console.error('Error al guardar en la base de datos:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}); */

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});