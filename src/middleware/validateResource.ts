import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"
import StatusCode from "status-code-enum"

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    } catch (e:any) {
        return res.status(StatusCode.ClientErrorBadRequest).send(e.errors);
    }
}

export default validate;