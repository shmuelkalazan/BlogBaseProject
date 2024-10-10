import { IPost } from "../models/postModel"
import userModel from "../models/userModel"
const createUser = async (user:any):Promise<any | void> =>{
    try {
        if (!user.user_name || !user.email){
            return "please enter user name and email proper"
        }
        const dbUser:any|undefined = new userModel({
            user_name:user.user_name,
            email:user.email,
            profile:{
                bio:user.profile.bio || "",
                socialLinks:user.profile.socialLinks ||""
            }
        })
        await dbUser.save()
        console.log("user saved successfully")
        return dbUser
    } catch (err) {
        console.log(err)
        return err
    }
}

export {
    createUser,
}