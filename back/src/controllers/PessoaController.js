const mongoose = require('../config/database')
const PessoaModel = require('../models/PessoaModel')
const {
    startOfDay, endOfDay,
} = require('date-fns')
class PessoaController{
    static async criar(req, res){
        const pessoa = new PessoaModel(req.body)
        await pessoa.save()
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em salvar", err)
            })
    }
    static async buscar(req, res){
        await PessoaModel.findById(req.params.id)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em buscar", err)
            })

    } 
    static async listar(req, res){
        await PessoaModel.find()
            .sort('data')
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em listar", err)
            })

    } 
    static async atualizar(req, res){
        await PessoaModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em atualizar", err)
            })

    } 
    static async deletar(req, res){
        await PessoaModel.deleteOne({_id: req.params.id})
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em deletar", err)
            })

    } 
    static async consultaHoje(req, res){
        const hoje = new Date()
        let filtro = {
            data: {$gte: startOfDay(hoje), $lte: endOfDay(hoje)}
        }
        await PessoaModel.find(filtro)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em hoje", err)
            })
    }
    static async consultaAtrasadas(req, res){
        const hoje = new Date()
        let filtro = {
            data: {$lt: hoje}
        }
        await PessoaModel.find(filtro)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em atrasadas", err)
            })
    }
    static async consultaConcluidas(req, res){
        let filtro = {
            termino: true
        }
        await PessoaModel.find(filtro)
            .then(resp => res.status(200).json(resp))
            .catch(err => {
                res.status(500).json(err)
                console.error("Deu erro em deletar", err)
            })
    }
}
module.exports = PessoaController