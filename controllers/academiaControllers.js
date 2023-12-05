const academiaServices = require('../services/academiaServices');
const { isValidObjectId } = require('mongoose');




module.exports = {
    async AcademiaCreate(req, res) {
      try {
        const novaAcademia = await academiaServices.createAcademia(req.body);
        res.status(201).json(novaAcademia);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

async ListaAcademia (req, res) {

const users = await academiaServices.academiaList ()
res.json (users)

},




async AtualizarAcademia (req, res) {

try {
    const academiaId = req.params._id
    const novaAcademiaAtt = req.body
    const academiaAtualizado = await academiaServices.attAcademia (academiaId, novaAcademiaAtt)

    res.json (academiaAtualizado)


}
catch (error) {
    res.status(400).json({error:error.message})
}


},


async AcademiaDelete (req , res) {

try {

const academiaId = req.params._id
 {
  if (!academiaId || !isValidObjectId(academiaId)) {
    return res.status(400).json({ message: 'ID de aluno inválido' });
  }
}


await  academiaServices.deleteAcademia (academiaId)
res.status(201).json ({message: 'Aluno excluido'})

}

catch (err) {
res.status(500).json ({message: 'Erro ao excluir aluno', error: err.message})

}



} 


}