const UserReposirtory = require('../repository/user-repository')
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class UserService{
    constructor(){
        this.UserReposirtory = new UserReposirtory();
    }
    async create(data){
        try{
            const user = await this.UserReposirtory.create(data);
            return user;
        }catch(error){
            console.log("something went wrong at Service layer.")
            throw{error}
        }
    }
    async destory(userId){
        try{
            const user = await this.UserReposirtory.destroy(userId);
            return user;
        }catch(error){
            console.log("something went wrong at Service layer.")
            throw{error}
        }
    }
    async signIn(email,plainPassword){
        try{
            //step1 -> Fetch the user using the email
            const user = await this.UserReposirtory.getByEmail(email);
            //step2 -> compare incoming plain password with stores encrypted password
            const passwordMatch = await this.checkPassword(plainPassword,user.password);
            if(!passwordMatch){
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            } 
            //step3 -> if password matches then create a token and send it to the user
            const newJWT = this.createToken({email:user.email,id: user.id});
            return newJWT;
        }catch(error){
            console.log("something went wrong at Service layer while signIn.")
            throw{error}
        }
    }

    createToken(user){
        try{
            const result = jwt.sign(user,JWT_KEY,{expiresIn : '1h'})
            return result;

        }catch(error){
            console.log("something went wrong at Service layer in token creation.")
            throw{error}
        }
    }
    verifyToken(token){
        try{
            const response = jwt.verify(token,JWT_KEY);
            return response;
        }catch(error){
            console.log("something went wrong at Service layer in token creation.")
            throw{error}
        }
    }
    checkPassword(userInputPlainPassword,encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);

        }catch(error){
            console.log("something went wrong at Service layer in password comparasion.")
            throw{error}
        }
    }
    async isAuthenticated(token){
        try{
            const response = this.verifyToken(token);
            if(!response){
                throw {error:'Invalid token'}
            }
            const user = await this.UserReposirtory.getById(response.id);
            if(!user){
                throw {error:'Invalid token'}
            }
            return user.id;
        }catch(error){
            console.log("something went wrong at Service layer in password comparasion.")
            throw{error}
        }
    }

    
}

module.exports = UserService;