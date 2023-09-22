const express = require("express");
const app = express();

const dotenv = require('dotenv').config();
// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configurações do app para outros arquivos acessarem
module.exports = app