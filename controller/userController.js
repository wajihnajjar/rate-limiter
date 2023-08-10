const { head } = require("../routes/userRouter")

$: Map = new Map()
$ : weekLyClaim = new Map()
exports.signUp = (req,res)=>{
    for (const [key , value] of Map){
    console.log(key ," ",value)
}
    var ip =req.headers['x-forwarded-for']
    || req.socket?.remoteAddress
    if(Map.get(ip)>=10){
        res.status(301).send("Maxiumum Account reached in day")
        }
        else{
            const Value = Map.get(ip)
            Value==undefined ? Map.set(ip,1) : Map.set(ip , Value+1)
            const {username , password} = req.body
            const user  ={username , password}
            req.session.user = user
            res.status(200).send("Authorazed")

        }



}




exports.postBlog = (req,res)=>{


}

exports.claimReward = (req,res)=>{
    console.log(req.session)
    const headers  = ((req.headers));
    const device = "1 "+headers["user-agent"]
    res.send(device)


}
