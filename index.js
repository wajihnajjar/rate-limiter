const express = require("express")
const app = express()
const PORT = 4000
const User  =require("./routes/userRouter")
var device = require('express-device');
var session = require('express-session');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
var FileStore = require('session-file-store')(session);
var fileStoreOptions = {};

  app.use(session({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: new FileStore(fileStoreOptions),
    saveUninitialized: false
  }));
    
app.use(device.capture());
app.use(bodyParser())

app.use("/user",User)
app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
app.listen(4000,()=>{
console.log(`Server started at port ${PORT}`)

})