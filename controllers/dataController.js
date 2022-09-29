const {readFileSync, writeFileSync}= require('fs');

const path= require('path');


/**
 * @ get student data
 * @name api/v1/student
 * @Besc public
 */

const studentRouterP=(req, res)=>{

    const students= JSON.parse(readFileSync(path.join(__dirname, '../db/students.json')))

    res.status(200).json(students)

}

/**
 * @ get student data
 * @name api/v1/student
 * @Besc public
 */

const studentPostRouterP=(req, res)=>{

    const students= JSON.parse(readFileSync(path.join(__dirname, '../db/students.json')))
    const {name, skill, }= req.body;

    if(!name || !skill){
        res.status().json({
            message: 'name & skill is required!'
        })
    }else{
        students.push({
            id: Date.now(). toString(),
            name:name,
            skill:skill

        })

        writeFileSync(path.join(__dirname, '../db/students.json') , JSON.stringify(students))
        res.status(201).json({
            message: "send message success full"
        })
    }

    

}



// export student

module.exports={
    studentRouterP,
    studentPostRouterP
}