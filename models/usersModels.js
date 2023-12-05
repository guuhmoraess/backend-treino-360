const mongoose = require ('mongoose')

const UserType = {
ALUNO: 'ALUNO',
TRAINER:'TRAINER',

}




const UserSchema = new mongoose.Schema (

{

nome: String,
sobrenome: String,
cpf: String,
email: String,
tipo: {

type: String,
enum: [ UserType.ALUNO, UserType.TRAINER], required: true


},

}


)

module.exports = mongoose.model('index.js', UserSchema)


