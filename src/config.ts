import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || process.env.DEV_PORT,
  ratesApi: process.env.RATES_API
};