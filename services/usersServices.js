const Users = require ('../models/usersModels')




module.exports = {
  async createUser(data) {
    const user = new Users(data);
    return await Users.create(user);
  },


 async  userList () {
return Users.find ();

},

async attUser (userId, newUserAtt) {
return await Users.findByIdAndUpdate (userId, newUserAtt, { new:true})

},


async deleteUser (userId) {

  return Users.findOneAndDelete(userId)

}






}









  
