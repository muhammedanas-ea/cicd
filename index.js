import express from "express"
const app = express()


app.get('/',(req,res) =>{
    res.json({message:'is working cicd pippline'})
})


app.listen(3000,() =>{
    console.log('server is running');
})