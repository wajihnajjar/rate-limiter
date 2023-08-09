const mysql  =require("mysql2")
const connection = mysql.createConnection({

host:"localhost",
port:"3306" , 
user:"root" , 
password : "root" , 
database:"rateLimiter"
})

connection.connect((err,succ)=>{
if(err){
    console.log(err)
}
else 
console.log("Database Connected")

})