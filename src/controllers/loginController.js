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
            req.flash('errors', login.errors)

            req.session.save(() => {
                return res.redirect('index')
            });
            return;
        }
        req.flash('success', 'seu usuário foi criado com sucesso!')
        req.session.save(() => {
            return res.redirect('index')
        })
    } catch (e){
        console.log(`O erro é ${e}`)
        res.render('404')
    }
}
exports.login = async (req, res) => {
    try{
        const login = new Login(req.body);
        await login.login();
        if(login.errors.length > 0){
            req.flash('errors', login.errors)

            req.session.save(() => {
                return res.redirect('index')
            });
            return;
        }
        req.flash('success', 'Você fez login com sucesso')
        req.session.user = login.user
        req.session.save(() => {
            return res.redirect('/index')
        })
    } catch (e){
        console.log(`O erro é ${e}`)
        res.render('404')
    }
}
exports.logout = (req, res) => {
    res.session.destroy();
    res.redirect('/login/index')
}