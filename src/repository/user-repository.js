const {User} = require('../models/index')

class UserReposirtory{
    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }catch(error){
            console.log("something went wrong at repository layer.")
            throw{error}
        }
    }

    async destroy(userId){
        try{
            const user = await User.destroy({
                where : {
                    id : userId,
                }});
            return user;
        }catch(error){
            console.log("something went wrong at repository layer.")
            throw{error}
        }
    }
    async getById(userId){
        try{
            const user = await User.findByPk(userId,{
                attributes :['email','id']
            });
            return user;

        }catch(error){
            console.log("something went wrong at repository layer.")
            throw{error}
        }
    }
}
module.exports = UserReposirtory;