const UserService = require('../service/user-service')

const userService = new UserService();

const create = async (req,res)=>{
    try{
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            success: true,
            message:"Successfully created a new user",
            data: response,
            success: true,
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(501).json({
            data: {},
            message: "Something went wrong at controller.",
            err: error,
            success: false

        })
    }
}

const signIn = async (req,res) =>{
    try{
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            success: true,
            message:"Successfully signed In",
            data: response,
            success: true,
            err: {},
        });
    }catch(error){
        console.log(error);
        return res.status(501).json({
            data: {},
            message: "Something went wrong at controller.",
            err: error,
            success: false

        })
    }
}

module.exports = {
    create,
    signIn
}