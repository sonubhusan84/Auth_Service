const express = require('express')
const app = express();
const {PORT} = require('./config/serverConfig');

const perpareAndStartServer = ()=>{
    app.listen(PORT,() =>{
        console.log(`Server started on Port : ${PORT}`);
    })
}

perpareAndStartServer();