const express = require('express')
const PessoaController = require('../controllers/PessoaController')
const PessoaValidate = require('../middlewares/PessoaValidate')
const rota = express.Router()
rota.post('/', PessoaValidate, PessoaController.criar)
rota.get('/', PessoaController.listar)
rota.get('/:id', PessoaController.buscar)
rota.put('/:id', PessoaController.atualizar)
rota.get('/atrasadas', PessoaController.consultaAtrasadas)
rota.get('/concluidas', PessoaController.consultaConcluidas)
rota.get('/hoje', PessoaController.consultaHoje)
rota.delete('/:id', PessoaController.deletar)
module.exports = rota

