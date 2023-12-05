const mongoose = require('mongoose');

const connectDatabase = () => {

    console.log("Espere estamos conectando")

    mongoose.connect("mongodb+srv://gustavo:eGKGOEPT4BOepzbQ@cluster0.1duey0r.mongodb.net/?retryWrites=true&w=majority", { useNewurlparser: true, useUnifiedTopology: true })

        .then(() => console.log("Banco conectado"))



        .catch((error) => console.log(error))

}
module.exports = connectDatabase