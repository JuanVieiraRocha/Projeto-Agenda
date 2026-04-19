const Login = require('../models/loginModel')

exports.index = (req, res) => {
    res.render('login');
    return;
}

exports.cadastro = async (req, res) => {
    try{
        const login = new Login(req.body);
        await login.register();
        if(login.errors.length > 0){
            console.log("ta passando nesse verificador aqui")
            req.flash('errors', login.errors)
            req.session.save(function() {
                return res.redirect('back')
            });
            return;
        }
    } catch (e){
        console.log(`O erro é ${e}`)
        res.render('404')
    }
}