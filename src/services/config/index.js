import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'email@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
  GMAIL_NAME: process.env.GMAIL_NAME || 'GMAIL owner name',
}
 
