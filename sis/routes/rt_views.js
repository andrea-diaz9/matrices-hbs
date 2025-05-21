const express = require('express') 
const router = express.Router() 
/* const inicio = require('../controllers/ctrl_inicio')  */

// Inicio 
router.get('/', (req, res) => {
    res.render('calculadora'); 
});

module.exports = router 