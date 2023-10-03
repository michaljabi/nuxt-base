import {knexSnakeCaseMappers} from "objection";

/**
 * @const config: { [key: string]: Knex.Config }
 */
const config= {
  development: {
    client: 'better-sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./server/database/db.sqlite3",
    },
    migrations: {
      tableName: 'migrations',
      extension: 'mjs',
      directory: "./server/database/migrations",
    },
    seeds: {
      directory: './server/database/seeds/dev'
    },
    ...knexSnakeCaseMappers()
  },

};

export default config;
