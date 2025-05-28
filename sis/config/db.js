const sql = require("mssql");

/* const config = {
  user: "sa", 
  password: "prointernet", 
  server: "DESKTOP-HUMS825", 
  database: "calculadoraMatrices", 
  options: {
    encrypt: false, 
    trustServerCertificate: true, 
  }
}; */

const config = {
  user: "sa", 
  password: "eskuneandy", 
  server: "HIMAADC", 
  database: "calculadoraMatrices", 
  options: {
    encrypt: false, 
    trustServerCertificate: true, 
  }
};

async function conexion_db() {
  try {
    const pool = await sql.connect(config);
    return pool;  
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err;
  }
}
    
module.exports={
  conexion_db,
}