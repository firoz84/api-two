const express= require('express');
const { productData,productPostData } = require('../controllers/proController');


// create router
const router=express.Router();

router.get('/', productData)
router.post('/', productPostData)




// exprot router

module.exports=router;