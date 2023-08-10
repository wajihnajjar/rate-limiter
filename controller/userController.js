const { head } = require("../routes/userRouter")
var cron = require('node-cron');


  
$: map = new Map()
let  weeklyClaim = new Map()
let postUsers = new Map()
cron.schedule(' * * * * 4', () => {
weeklyClaim.clear()
});
cron.schedule(' * 00 * * *', () => {
    
    weeklyClaim.clear()
 });
    
 cron.schedule(' 1 * * * * *', () => {
    console.log("Here")
    postUsers.clear()
 });


exports.signUp = (req,res)=>{
    console.log("Test")
    for (const [key , value] of map){
    console.log(key ," ",value)
}
    var ip =req.headers['x-forwarded-for']
    || req.socket?.remoteAddress
    if(map.get(ip)>=10){
        res.status(301).send("Maxiumum Account reached in day")
        }
        else{
            const Value = map.get(ip)
            Value==undefined ? map.set(ip,1) : map.set(ip , Value+1)
            const {username , password} = req.body
            const user  ={username , password}
            req.session.user = user
            res.status(200).send("Authorazed")

        }



}




exports.postBlog = (req,res)=>{
const user = req.session.user.username 
const Value  = postUsers.get(user)
if(Value>=2){
  res.send("You Surpasse your limit ")  
}
else {
    Value ==undefined? postUsers.set(user,1) : postUsers.set(user,Value+1)
    res.send("Done Posting ")
}
}

exports.claimReward = (req,res)=>{
    console.log(req.session)
    const headers  = ((req.headers));
    const device = req.session.user.username+" "+headers["user-agent"]
    let value =  weeklyClaim.get(device)
     if(value>=5){
        res.send("You Get To the Maximun Number of claims in week Try next week")

     }
     else {
        value==undefined ? weeklyClaim.set(device , 1) : weeklyClaim.set(device,value+1)
        res.send("Done Posting ")

    }


}
