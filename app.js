const express = require("express")
const app = express()
const port = 8000

app.use(express.json())

app.get("/",function getData(req, res){
    try {
        const user = "theena thayalan"
        return res.status(200).json({ message: `Welcome ${user} !!!`})
    } catch (error) {
        return res.status(400).json({ message: "something went wrong", result: error.message })
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log(`port not connected in ${err}`)
    }
    console.log(`port is connected for ${port}`)
})