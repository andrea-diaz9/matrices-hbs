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

   sql.connect(config)
       .then(pool => {
           console.log('Conexión a la base de datos exitosa');
           // Aquí puedes realizar operaciones con la base de datos (consultas, inserciones, etc.)
           return pool;
       })
       .catch(err => {
           console.error('Error de conexión a la base de datos:', err);
       });

/* module.exports= {
  db_conn
} */