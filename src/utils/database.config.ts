import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from './constants';

const getConfig = (env: string) =>
  env === 'test'
    ? {
        client: 'pg',
        connection: {
          host: DB_HOST,
          port: DB_PORT || 5432,
          user: DB_USER,
          password: DB_PASSWORD,
          database: DB_DATABASE + '_test',
        },
      }
    : {
        client: 'pg',
        connection: {
          host: DB_HOST,
          port: DB_PORT || 5432,
          user: DB_USER,
          password: DB_PASSWORD,
          database: DB_DATABASE,
        },
      };

export const config = {
  test: getConfig('test'),
  development: getConfig('development'),
  production: getConfig('production'),
};