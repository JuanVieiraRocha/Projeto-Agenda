const Login = require('../models/loginModel')

exports.index = (req, res) => {
    res.render('login');
    return;
}

exports.cadastro = (req, res) => {
    const login = new Login(req.body);
    login.register();
    res.send(login.errors);
    return;
}