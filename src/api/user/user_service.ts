import bcrypt from "bcryptjs";
import { User } from "../../model/user_model";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config";

const create=async(
    body:any
):Promise<any>=>{

    const {name,password,email,iplTeam}=body;

    if(!(name || password || email || iplTeam)){
        throw{
            status:"404",
            msg:"Error please provide all the fields"
        };
    }

    const userExist=await User.findOne({email});
    if(userExist){
        throw{
            status:400,
            msg:"user aldready exist"
        }
    }

    const hashPassword=await bcrypt.hash(password,10);

    const newUser=await User.create({name,password:hashPassword,email,iplTeam});
    return newUser;

}

const login=async(body:any):Promise<any>=>{
    const {email,password}=body;

    if(!( password || email )){
        throw{
            status:"404",
            msg:"Error please provide all the fields"
        };
    }

    const userExist=await User.findOne({email});

    if(!userExist){
        throw{
            status:"404",
            msg:"error in credentials"
        }
    }

    const comparePassword=await bcrypt.compare(userExist.password,password);
    if(!comparePassword){
        throw{
            status:"404",
            msg:"error in credentials"
        }
    }

    const token=await jwt.sign({_id:userExist._id},JWT_SECRET,{expiresIn:"12hr"});

    return token;


}


export default {
    create,
    login
}