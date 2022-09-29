
const {readFileSync, writeFileSync}=require('fs');
const path = require('path');

/**
 * @desc api get routes
 * @name get api/v1/user
 * @acces public
 */

const getAlluser=(req, res)=>{
    const user= JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')))

    res.status(200).json(user);

}

/**
 * @desc get create user id
 * @name get post/api/v1/user/:id
 * @acces public
 */

const getPostuser=(req, res)=>{
//get user data from db folder
const user= JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')))
    const {name, skill}= req.body;
    if(!name || !skill){
        res.status(400).json({
            message: 'Name & Skill is required '

        });
        
    }else{
        // id and data create
        user.push({
            id:Date.now().toString(),
            name:name,
            skill:skill

        })
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(user));
        res.status(201).json({

            message: " user created success"
        })
    }  

}
/**
 * @desc single  a new user
 * @name get get/api/v1/user
 * @acces public
 */

const singleUser=(req, res)=>{
//get user data from db folder
const user= JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')))
   
const single=user.find(data=> data.id == req.params.id);
if(single){
    res.status(200).json(single);
}else{
    res.status(404).json({
        message:"Single user not found data "
    })
}

}


/**
 * @desc delete user data
 * @name DELETE get/api/v1/user
 * @acces public
 */

const singleDeleteUser=(req, res)=>{
//get user data from db folder
const user= JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

if(user.some(data=>data.id==req.params.id)){

    const data=user.filter(data=> data.id != req.params.id);
    writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(data));
    res.status(200).json({
        message:'data delete successfull '
    })

}else{
    res.status(404).json({
        message:'Get not found delete'
    })
}
   



}


/**
 * @desc updatedata user data
 * @name put/patch/api/v1/user
 * @acces public
 */

const updateData=(req, res)=>{
//get user data from db folder
const user= JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

if(user.some(data=>data.id==req.params.id)){

user[user.findIndex(data=>data.id==req.params.id)]={
    ...user[user.findIndex( data => data.id ==req.params.id)],
    ...req.body
}
    writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(user));
    res.status(200).json({
        message:'user updated successfull'
    });
    
}else{
    res.status(404).json({
        message:'user update not found '
    })
}
   



}

// appi export

module.exports={
    getAlluser,
    getPostuser,
    singleUser,
    singleDeleteUser,
    updateData
}