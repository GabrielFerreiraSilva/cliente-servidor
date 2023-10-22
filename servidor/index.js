const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())

const autenticator = require("./model/autenticator.js");

app.post("/login", (request, response) => {
    const result = autenticator.autenticateLogin(request.body);

    if(result === 1){
        response.status(400).send("Dados de login inválidos");
    }
    else if(result === 2){
        response.status(200).send("Login realizado com sucesso");
    }
    else if(result === 3){
        response.status(404).send("Usuário ou senha incorretos");
    }
})

app.listen(3500);