const express = require('express') 
const router = express.Router() 

router.use(require('./rt_views')) 
router.use(require('./rt_routes')) 

module.exports = router 