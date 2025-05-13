const sql = require("mssql");


  const config = {
    user: "sa", 
    password: "prointernet", 
    server: "DESKTOP-HUMS825", 
    database: "calculadoraMatrices", 
    options: {
      encrypt: false, 
      trustServerCertificate: true, 
    }
  };

  let pool

  async function conexion_db (){
    try {
      if(!pool) {
        pool = await sql.connect(config)
        .then(async pool => {
            console.log('Conexión a la base de datos exitosa')
            /* const mostrarLista = await pool.request().query('select idOp, fechaOp, tipoOp, matrizA, matrizB, resultado from operaciones')
            console.table(mostrarLista.recordset) */
            /* console.table(mostrarLista.recordset) */ //es para que se vea en tabla en la consola
          })
        }
        return pool;
        
      } catch (error) {
        console.log('Error de conexion a la base de datos',error)
        throw error
      }
    }
    
module.exports={
  conexion_db,
}