const UserReposirtory = require('../repository/user-repository')
const {JWT_KEY} = require('../config/serverConfig');
const {bcrypt} = require('bcrypt');

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
    userPassword(userInputPlainPassword,encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);

        }catch(error){
            console.log("something went wrong at Service layer in password comparasion.")
            throw{error}
        }
    }
    
    
}

module.exports = UserService;