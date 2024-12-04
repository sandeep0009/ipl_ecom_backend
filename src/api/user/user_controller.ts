import { NextFunction, Request, Response } from "express";
import service from "./user_service"


export const create=async(
    req:Request |any,
    res:Response,
    next:NextFunction

):Promise<any>=>{
    try {
        const data=await service.create(req.body);
        return res.status(201).send({message:"user created successfully",data});
        
    } catch (error) {
        console.log("error in creation of user",error);
        next(error)

        
    }
}



export const login=async(
    req:Request |any,
    res:Response,
    next:NextFunction

):Promise<any>=>{
    try {
        const data=await service.login(req.body);
        return res.status(200).send({message:"user created successfully",data});
        
    } catch (error) {
        console.log("error in user login",error);
        next(error)
        
        
    }
}