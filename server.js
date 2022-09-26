const express= require('express');
const colors= require('colors');
const dotenv= require('dotenv').config();

// init enveronment variable
const PORT= process.env.PORT || 8080;



// express init 

const app= express();


//express middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));






// server listen
app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`.bgGreen.black);
})


