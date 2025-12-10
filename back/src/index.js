const express = require('express')
const cors = require('cors')
const app = express()
const rota = require('./routers/PessoaRota')
const rotas = require('./routers/MaratonaRota')
const port = 5000
app.use(cors())
app.use(express.json())
app.use('/pessoa', rota)
app.use('/maratona', rotas)
app.listen(port, async() =>{
    console.log(`http://localhost:${port}`)
})