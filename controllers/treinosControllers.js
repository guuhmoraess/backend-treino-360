const treinoServices = require ('../services/treinoServices')
const { isValidObjectId } = require('mongoose');


module.exports = {
    async TreinoCreate(req, res) {
      try {
        const novoTreino = await treinoServices.createTreino(req.body);
        res.status(201).json(novoTreino);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    async ListaTreino (req, res) {

        const treinoslistas = await treinoServices.listTreino ()
        res.json (treinoslistas)
        
        },

        async AtualizarTreino (req, res) {

            try {
                const treinoId = req.params._id
                const novoTreinoAtt = req.body
                const treinoAtualizado = await treinoServices.atualizarTreinos (treinoId, novoTreinoAtt)
            
                res.json (treinoAtualizado)
            
            
            }
            catch (error) {
                res.status(400).json({error:error.message})
            }
            
            
            },

            async TreinoDelete (req , res) {

                try {
                
                const treinoId = req.params._id
                 {
                  if (!treinoId || !isValidObjectId(treinoId)) {
                    return res.status(400).json({ message: 'ID de treino inválido' });
                  }
                }
                
                
                await  treinoServices.deleteTreino (treinoId)
                res.status(201).json ({message: 'Treino excluido'})
                
                }
                
                catch (err) {
                res.status(500).json ({message: 'Erro ao excluir Treino', error: err.message})
                
                }
                
                
                
                } 


}
