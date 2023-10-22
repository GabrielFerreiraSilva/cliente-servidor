const database = require("../database/database.js");


function autenticateLogin(user){
    let response = 0;

    if(user.login !== null && user.login.endsWith(".com")){
        if(user.password !== null && user.password.length >= 5){
            if(database.searchUser(user)){
                response = 2;
            }
            else{
                response = 3;
            }
        }
        else{
            response = 1;
        }
    }
    else{
        response = 1;
    }

    return response;
}

module.exports = {
    autenticateLogin
}

