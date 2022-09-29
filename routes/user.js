
const express= require('express');
const { getAlluser,getPostuser,singleUser,singleDeleteUser ,updateData} = require('../controllers/studentSontroller');


// creat router
const router= express.Router();




router.route('/').get(getAlluser).post(getPostuser);
router.route('/:id').get(singleUser).delete(singleDeleteUser).put(updateData).patch(updateData);

// exprorts router
module.exports=router;



