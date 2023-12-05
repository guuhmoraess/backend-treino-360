const { isValidObjectId } = require('mongoose');
const service = require ('../services/usersServices')




module.exports = {
    async createUser(req, res) {
      try {
        const newUser = await service.createUser(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

async usersList (req, res) {

const users = await service.userList ()
res.json (users)

},




async usersAtt (req, res) {

try {
    const userId = req.params._id
    const newUserAtt = req.body
    const userAtualizado = await service.attUser (userId, newUserAtt)

    res.json (userAtualizado)


}
catch (error) {
    res.status(400).json({error:error.message})
}


},


async userDelet (req , res) {

try {

const userId = req.params._id
 {
  if (!userId || !isValidObjectId(userId)) {
    return res.status(400).json({ message: 'ID de aluno inválido' });
  }
}


await  service.deleteUser (userId)
res.status(201).json ({message: 'Aluno excluido'})

}

catch (err) {
res.status(500).json ({message: 'Erro ao excluir aluno', error: err.message})

}



}





}








