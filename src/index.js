const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const {PORT} = require('./config/serverConfig');
const apiRoutes =  require('./routes/index');
const db = require('./models/index')
const {User,Role} = require('./models/index');
// const {User} = require('./models/index')
// const bcrypt = require('bcrypt')

const perpareAndStartServer = ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async() =>{
        console.log(`Server started on Port : ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        // const u1 = await User.findByPk(4);
        // const r1 = await Role.findByPk(1);
        //u1.addRole(r1);
        //const response =await  u1.getRoles();
        // const response = await u1.hasRole(r1);
        // console.log(response);
        // const incommingPassword = '12345678'
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incommingPassword,user.password);
        // console.log(response);


     })
}

perpareAndStartServer(); 