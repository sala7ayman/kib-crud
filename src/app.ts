import express from 'express'
import config from 'config'
import connect from './utlis/connect';
import logger from './utlis/logger';
import routes from './routes';
import swaggerDocs from './utlis/swagger';

//define const values
const app = express();
const port = config.get<number>('port')

app.use(express.json());

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`)
    await connect();
    routes(app);
    swaggerDocs(app,port);
}

);

