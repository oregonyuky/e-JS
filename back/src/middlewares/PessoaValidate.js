const PessoaModel = require('../models/PessoaModel')
const PessoaValidate = async(req, resp, next) => {
    const {nome, idade, termino, data} = req.body
    if(!nome)return resp.status(400).json({erro: 'nome o'})
    if(!idade)return resp.status(400).json({erro: 'idade o'})
    if(!data)return resp.status(400).json({erro: 'data o'})
    let existeNome
    if(req.params.id)existeNome = await PessoaModel.findOne({nome: nome, _id: {$ne: req.params.id}})
    else existeNome = await PessoaModel.findOne({nome: nome})
    if(existeNome)return resp.status(400).json({erro: 'ja existe o nome'})
    next()
}
module.exports = PessoaValidate