const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');



router.get('/', productsController.produtoInterno);



module.exports = router;