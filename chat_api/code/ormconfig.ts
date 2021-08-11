const database = process.env.MYSQL_DB_DATABASE
const host = process.env.MYSQL_DB_HOST
const port = process.env.MYSQL_DB_PORT
const username = process.env.MYSQL_DB_USERNAME
const password = process.env.MYSQL_DB_PASSWORD

export default {
  type: 'mysql',
  host,
  port,
  username,
  password,
  database,
  migrations: [
    './src/database/migrations/**.ts'
  ],
  entities: [
    './src/entities/**.ts'
  ],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
