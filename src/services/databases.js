import mongoose from 'mongoose';
import Config from './config/index';
import { logger } from './logger';
const connectionString = Config.MONGO_ATLAS_URL

export const initMongoDB = async () =>{
    try{
        logger.info("Conectado a mi DB");
        await mongoose.connect('mongodb+srv://franco99:Coco2022@cluster0.tvjwd.mongodb.net/eccomerce?retryWrites=true&w=majority');
    }catch(error){
        logger.error(`error => ${error}`);
        return error;
    }
};
