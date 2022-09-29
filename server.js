const express= require('express');
const colors= require('colors');
const dotenv= require('dotenv').config();
const userRouter= require('./routes/user');
const userStudentr= require('./routes/student');
const userproduct= require('./routes/products');

// init enveronment variable
const PORT= process.env.PORT || 8080;



// express init 

const app= express();


//express middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// api route
app.use('/api/v1/user', userRouter);
app.use('/api/v1/student', userStudentr);
app.use('/api/v1/product', userproduct)




// server listen
app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`.bgWhite.black);
})


