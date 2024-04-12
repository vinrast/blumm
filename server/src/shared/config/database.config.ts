export const {
  POSTGRES_DB_HOST = 'localhost',
  POSTGRES_DB_PORT = '5432',
  POSTGRES_DB = 'Gestao',
  POSTGRES_USER = 'gestao',
  POSTGRES_PASSWORD = 'gestao',
  DB_DIALECT = 'postgres',
} = process.env;

export const DATABASE_CONFIG_OPTIONS = {
  logging: false,
  retry: {
    max: 3,
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
    ],
  },
  define: {
    timestamps: true,
  },
  host: POSTGRES_DB_HOST,
  port: Number(POSTGRES_DB_PORT),
  dialect: DB_DIALECT,
};
