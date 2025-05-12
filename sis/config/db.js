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
           sql.query('SELECT * FROM operaciones').then(result => console.log(result)).catch(err => console.log(err))
           return pool;
       })
       .catch(err => {
           console.error('Error de conexión a la base de datos:', err);
       });