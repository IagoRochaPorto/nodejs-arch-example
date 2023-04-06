import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/entities/*.ts'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: [__dirname + '/migrations/*.ts'],
})