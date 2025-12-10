const MaratonaModel = require('../models/MaratonaModel')
const {
    startOfDay, endOfDay
} = require('date-fns')
class MaratonaController{
    static async criar(req, res){
        const maratona = new MaratonaModel(req.body)
        await maratona.save()
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no criar")
                res.status(500).json(err)
            })
    }
    static async listar(req, res){
        await MaratonaModel.find()
            .sort('data')
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no listar")
                res.status(500).json(err)
            })
    }
    static async buscar(req, res){
        await MaratonaModel.findById(req.params.id)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no buscar")
                res.status(500).json(err)
            })
    }
    static async deletar(req, res){
        await MaratonaModel.deleteOne(req.params.id)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no deletar")
                res.status(500).json(err)
            })
    }
    static async atualizar(req, res){
        await MaratonaModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no atualizar")
                res.status(500).json(err)
            })
    }
    static async maratonaHoje(req, res){
        const hoje = new Date()
        let filtros = {
            data: {$gte: startOfDay(hoje), $lte: endOfDay(hoje)}
        }
        await MaratonaModel.find(filtros)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no maratonaHoje")
                res.status(500).json(err)
            })
    }
    static async maratonaAtrasada(req, res){
        const hoje = new Date()
        let filtros = {
            data: {$lt: hoje}
        }
        await MaratonaModel.find(filtros)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no maratonaAtrasada")
                res.status(500).json(err)
            })
    }
    static async maratonaConcluida(req, res){
        let filtros = {
            termino: true
        }
        await MaratonaModel.find(filtros)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                console.error("deu erro no maratonaConcluida")
                res.status(500).json(err)
            })
    }
}
module.exports = MaratonaController