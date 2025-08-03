import jwt from 'jsonwebtoken'

//doctor authentication middle ware
const authDoctor=async(req,res,next)=>{
    try {
        const {dtoken}=req.headers
        if(!dtoken){
            return res.json({success:false,message:'not authorized login again'})
        }
        
        const token_decode=jwt.verify(dtoken,process.env.JWT_SECRET)
        req.body = req.body || {};
// req.body.userId = decoded.id;

        req.body.docId=token_decode.id

        next();

    } catch (error) {
        console.log(error)
        res.json({suscess:false,message:error.message})
    }
}


export default authDoctor;












