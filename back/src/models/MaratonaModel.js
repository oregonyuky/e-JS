const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Maratona = new Schema({
    pessoa_id: {type: String, required: true},
    data: {type: Date, required: true},
    data_criada: {type: Date, default: Date.now()},
    termino: {type: Boolean, required: true},
    tipo: {
        type: String,
        enum: ['criancas', 'adultos'],
        required: true
    }
})
module.exports = mongoose.model('Maratona', Maratona)