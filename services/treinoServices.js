const Treinos = require ("../models/treinosModels")


module.exports = {
    async createTreino(data) {
      const academia = new Treinos (data);
      return await Treinos.create(data);
    },
  
  
   async  listTreino () {
  return await Treinos.find ();
  
  },
  
  async atualizarTreinos (treinoId, novoTreinoAtt) {
    return await Treinos.findByIdAndUpdate (treinoId, novoTreinoAtt, { new:true})
    
    },
    
    async deleteTreino (treinoId) {

        return Treinos.findOneAndDelete(treinoId)
      
      },

      
        
    }







