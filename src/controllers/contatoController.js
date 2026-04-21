const Contato = require('../models/contatoModel')

exports.index = (req, res) => {
    res.render('contato', {user: {}})
}

exports.register = async (req, res) => {
    try{
        const contato = new Contato(req.body)
        await contato.register()

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            return req.session.save(() => res.redirect('index'))
        }

        req.flash('success', 'Contato registrado com sucesso')
        return req.session.save(() => res.redirect(`index/${contato.contato._id}`))
    }
    catch (e) {
        console.log(e)
        return res.render('404')
    }
}
exports.editIndex = async (req,res) => {
    if(!req.params.id){
        return res.render('404')
    }
    const contato = new Contato
    const user = await contato.buscaPorId(req.params.id)
    if(!user){
        return res.render(404);
    }
    res.render('contato', { user })
}
exports.edit = async (req, res) => {
    try{
        if(!req.params.id){
            return res.render('404')
        }
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            return req.session.save(() => res.redirect('index'))
        }

        req.flash('success', 'Contato registrado com sucesso')
        return req.session.save(() => res.redirect(`index/${contato.contato._id}`))
    }catch (e){
        console.log(e)
        return res.render('404')
    }
}