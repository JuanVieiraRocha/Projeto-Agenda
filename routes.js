const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginConroller = require('./src/controllers/loginController')

// Rotas da home
route.get('/index', homeController.index);

route.get('/login/index', loginConroller.index)
route.post('/login/cadastro', loginConroller.cadastro)



module.exports = route;
