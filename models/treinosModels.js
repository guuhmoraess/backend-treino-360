const mongoose = require ('mongoose')

const treinoSchema = new mongoose.Schema (


    {
    
        nome: String,
        descrição:  String,
        categoria: String,
        academia: String,
    
}
)

module.exports = mongoose.model('treinosModels.js', treinoSchema)