import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'teste',
    database: 'teste',
    entities: [__dirname + '/entities/*.ts'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: [__dirname + '/migrations/*.ts'],
})