import mongoose from 'mongoose';

import logger from '../utils/logger.js';

mongoose.set('strictQuery', false)



console.log('Connecting... ')
mongoose.connect('mongodb+srv://fmero5234:Fernanflo23@cluster0.350346f.mongodb.net/Contacts?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        logger.info('connected to MongoDD')
    }).catch(error => {
        logger.error('Error connecting to MongoDB: ', error)
    })


const concatSchema = new mongoose.Schema({
    name: String,
    number: String
})

concatSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.model('Contacts', concatSchema)