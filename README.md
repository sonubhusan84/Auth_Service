Auth_Service

->follow all the steps as per the flight service and then after the entry is added to the database follow the steps:
->Now we need to crate triggers so when a password is entered it gets convertedinto encrypted one.
->models -> user.js ->in the end User.beforeCreate() ==>it is a trigger  ('Sequelize triggers or hooks')
->npm install bcrypt for encryption
->read about salt in encryption
-> go to src/config/serverconfig.js and export SALT
->Install jwt token 'npm i jsonwebtoken'