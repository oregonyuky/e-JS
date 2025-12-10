const mongoose = require('../config/database')
const Schema = mongoose.Schema
const Pessoa = new Schema({
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    termino: {type: Boolean, default: false},
    data: {type: Date, require: true}
})
module.exports = mongoose.model('Pessoa', Pessoa)