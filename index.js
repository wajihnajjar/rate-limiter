const express = require("express")
const app = express()
const PORT = 4000
const User  =require("./routes/userRouter")
app.use("/user",User)
app.get("/",(req,res)=>{
res.send("<h1>Hello world</h1>")
})
app.listen(4000,()=>{
console.log(`Server started at port ${PORT}`)

})