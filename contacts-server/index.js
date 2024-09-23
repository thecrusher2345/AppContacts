
import express, { json } from 'express';
import morgan from 'morgan'; 
import cors from 'cors';
import Contacts from './models/contacts.js'
import logger from './utils/logger.js'
import { errorHandler, unknownEndpoint } from './middelware.js'







const app = express();
app.use(cors())
app.use(json());

morgan.token('body', (req) => JSON.stringify(req.body)); 
const customFormat = ':method :url :status :res[content-length] - :response-time ms :body';
app.use(morgan(customFormat));




app.get('/', (req, res)=>{
    res.send('<h1>Hello World!</h1>')
})



app.get('/api/contacts', (req,res) => {
  Contacts.find({}).then(result => {
    res.json(result)
    logger.info('Listado de contactos')
    
  })
})


app.post('/api/contacts',(req, res) => {
  const body = req.body

  if (body === undefined) {
    return res.status(400).json({error: 'content missing'})
  }
  const contact = new  Contacts({
    name: body.name,
    number: body.number
  })
  contact.save().then(savedContacts => {
    res.json(savedContacts)
    logger.info('Contacto creado')
  }).catch(error => next(error))
})

app.get('/api/contacts/:id', (req, res, next ) =>{
  Contacts.findById(req.params.id)
  .then(contact => {
    if (contact){
      res.json(contact)
    }else {
      res.status(404).end()
    }
    logger.info('Contacto encontrado')
  }).catch( error => next(error))
})

app.put('/api/contacts/:id', (req, res, next ) =>{
  Contacts.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(contact => {
    if (contact){
      res.json(contact)
    }else {
      res.status(404).end()
    }
    logger.info('Contacto actualizado')
  }).catch( error => next(error))
})

app.delete('/api/contacts/:id', (req , res,next) => {
  Contacts.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(204).end()
  }).catch( error => next(error))
})






app.use(unknownEndpoint)



app.use(errorHandler)


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    logger.info(`Server running on port ` + PORT)
})