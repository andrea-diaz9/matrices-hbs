const express = require('express') 
const router = express.Router() 
/* const inicio = require('../controllers/ctrl_inicio')  */

// Inicio 
router.get('/calculadora', (req, res) => {
    res.render('calculadora'); 
});

module.exports = router 