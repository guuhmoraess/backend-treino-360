const mongoose = require ('mongoose')


const academiaSchema = new mongoose.Schema (


{

nome: String,
cnpj: String,
email: String,
street: String,
streetNumber: Number,
city: String,
estate: String,
country: String,
workouts:  [{
    type: String
   }
],




}


)

module.exports = mongoose.model('academiaModel.js', academiaSchema)