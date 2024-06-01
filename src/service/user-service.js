const UserReposirtory = require('../repository/user-repository')

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
}

module.exports = UserService;