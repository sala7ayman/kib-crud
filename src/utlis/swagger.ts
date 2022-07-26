import { Express, Request, Response } from 'express'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import { version } from "../../package.json"
import logger from './logger'


const options: swaggerJsdoc.Options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"KIB API CRUD",
            version
        }
    },
    apis: ["./src/routes.ts", "./src/dto/*.ts"],
}


const swaggerSpec =swaggerJsdoc(options)

function swaggerDocs(app:Express,port:number){
    //Swagger page
    app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec));

    //Docs in JSON format
    app.get('docs.json',(req:Request,res:Response) =>{
        res.setHeader('content-type','application/json')
        res.send(swaggerSpec)
    });

    logger.info(`Swagger docs available at http://localhost:${port}/docs`)
}


export default swaggerDocs;