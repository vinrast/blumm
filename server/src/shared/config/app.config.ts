import dotenv from 'dotenv';

const { SERVER_PORT } = dotenv.config().parsed;

export const APP_CONFIG = {
  SERVER_PORT: +SERVER_PORT,
};
