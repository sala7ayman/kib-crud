import mongoose from "mongoose";
import config from "config";
import logger from './logger';

async function connect() {
    const dbUri = config.get<string>('dbUri');
        logger.info(`dbURI is ${dbUri}`);
    try {
        await mongoose.connect(dbUri);
        logger.info('database connected')
    } catch (error) {
        logger.error('cannot connect to DB');
        process.exit(1);
    }

}
export default connect;