const academy = require ('../models/academiaModel')

module.exports = {
    async createAcademia(data) {
      const academia = new academy(data);
      return await academy.create(data);
    },
  
  
   async  academiaList () {
  return academy.find ();
  
  },
  
  async attAcademia (academiaId, novaAcademiaAtt) {
  return await academy.findByIdAndUpdate (academiaId, novaAcademiaAtt, { new:true})
  
  },


  async deleteAcademia (academiaId) {

    return academy.findOneAndDelete(academiaId)
  
  },






}
  
  
  
  
  
  
  