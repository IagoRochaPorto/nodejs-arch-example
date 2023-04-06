import "reflect-metadata"
import dotenv from 'dotenv'
import express, { Router } from 'express'
import { dataSource } from '@/infra/database/typeorm/appDataSource'
import { makeRouterFactory } from "./factories/routes/routerFactory"

dotenv.config()

dataSource.initialize()
  .then(() => console.log('Database is connected'))
  .catch((error) => console.log('Database connection error: ', error))

const server = express()

server.use(express.json())

const router = makeRouterFactory()

server.use(router)

server.listen(3000, () => {
  console.log('Server is running')
})
