const {readFileSync, writeFileSync}=require('fs');
const path= require('path')





/**
 * @get student data 
 * @name api/v1/product
 * @accss public
 */
const productData =(req, res)=>{
    const products= JSON.parse(readFileSync(path.join(__dirname, '../db/products.json')));

res.status(200).json(products);

}
/**
 * @get student data 
 * @name api/v1/product
 * @accss public
 */
const productPostData =(req, res)=>{
    const products= JSON.parse(readFileSync(path.join(__dirname, '../db/products.json')));
    const {name, skill}=req.body;

    if(!name || !skill){
        res.status(401).json({
            message:"Name & skill R required"
        });
    }else{
        products.push({
            id:Date.now().toString(),
            name:name,
            skill:skill
        })

        writeFileSync(path.join(__dirname, '../db/products.json'), JSON.stringify(products));
        res.status(201).json({
            message:"created product data successfull"
        });
    }




}


// export of json data
module.exports={
    productData,
    productPostData
}