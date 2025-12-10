const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/provaBosta'
mongoose.connect(url)
    .catch(err => console.error("deu erro no banco", err))
module.exports = mongoose