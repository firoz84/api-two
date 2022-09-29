
const express= require('express');
const { studentRouterP, studentPostRouterP } = require('../controllers/dataController');



//take the  router
const router= express.Router();


// create the router

router.get('/', studentRouterP)
router.post('/', studentPostRouterP)



module.exports=router;