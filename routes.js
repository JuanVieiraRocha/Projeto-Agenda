const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')

// Middlewares
const { loginRequired } = require('./src/middlewares/middleware')
// Rotas da home
route.get('/index', homeController.index);
route.get('/login/index', loginController.index)
route.get('/login/logout', loginController.logout)
route.get('/login/login-logado', loginController.index)

//rotas de usuário
route.post('/login/cadastro', loginController.cadastro)
route.post('/login/login', loginController.login)

//rotas de contato
route.get('/contato/index', loginRequired, contatoController.index)
route.post('/contato/register', contatoController.register)
route.get('/contato/index/:id', loginRequired, contatoController.editIndex)
route.post('/contato/edit/:id', loginRequired, contatoController.editIndex)



module.exports = route;
