const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const {PORT} = require('./config/serverConfig');
const apiRoutes =  require('./routes/index');
const {User} = require('./models/index')
const bcrypt = require('bcrypt')

const perpareAndStartServer = ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async() =>{
        console.log(`Server started on Port : ${PORT}`);
        const incommingPassword = '12345678'
        const user = await User.findByPk(3);
        const response = bcrypt.compareSync(incommingPassword,user.password);
        console.log(response);
     })
}

perpareAndStartServer();