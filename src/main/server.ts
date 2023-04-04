import "reflect-metadata"
import express from 'express'
import { dataSource } from '@/infra/database/typeorm/appDataSource'

dataSource.initialize()
  .then(() => console.log('Database is connected'))
  .catch((error) => console.log('Database connection error: ', error))

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Hello World')
})

server.listen(3000, () => {
  console.log('Server is running')
})
