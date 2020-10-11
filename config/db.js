const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    mongoose.Promise = global.Promise;
    
    try {
        await mongoose.connect(process.env.DB_MONGO || 'mongodb+srv://root:root@cluster0.cmzuw.mongodb.net/RendaloTest?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex:true
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log('Hubo un Error')
        console.log(error);
        process.exit(1);
    }
}
module.exports = conectarDB;