
$: Map = new Map()

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
            res.status(200).send("Authorazed")

        }



}

exports.postBlog = (req,res)=>{


}

exports.claimReward = (req,res)=>{



}
