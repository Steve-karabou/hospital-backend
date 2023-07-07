import * as dotenv from 'dotenv';
dotenv.config(); 


const config = {
    port: process.env.PORT || 5000,

    prefix: process.env.API_PREFIX || 'api',
    
    data_base: process.env.DATA_BASE
}


export default config;