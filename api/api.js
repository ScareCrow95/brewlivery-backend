import express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import fs from 'fs'
import authMiddleware from '../middleware/auth.middleware'

const morgan = require('morgan')

const api = express()

api.use(helmet())
api.use(cors())

morgan.token('body', (req, _res) => JSON.stringify(req.body))

api.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
)
api.use(json())

api.get('/', (req, res) => {
  res.send('shorturl.at/hqCK0')
})

// api.use('/api', authMiddleware)

fs.readdir('./api/routes', (err, files) => {
  files.forEach((file) => {
    console.log('added routes: ' + file.split('.')[0])
    api.use(`/api/${file.split('.')[0]}`, require('./routes/' + file).default)
  })
})

export default api
