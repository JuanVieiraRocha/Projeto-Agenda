const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')

// Rotas da home
route.get('/index', homeController.index);

route.get('/login/index', loginController.index)

route.post('/login/cadastro', loginController.cadastro)



module.exports = route;
