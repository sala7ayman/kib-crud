import { Express, Request, Response } from "express";
import { StatusCode } from "status-code-enum";
import { createUserHandler, deleteUserHandler, getUserHandler, updateUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import  { createUserDTO, deleteUserDTO, getUserDTO, updateUserDTO } from "./dto/user.dto"; 


function routes(app: Express) {
    // ## health check API

   /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(StatusCode.SuccessOK));

    // ## User CRUD API
    /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
    app.post("/api/users", validateResource(createUserDTO), createUserHandler);

    app.get(
        "/api/users/:userId",
        validateResource(getUserDTO),
        getUserHandler
      );

    
  app.delete(
    "/api/users/:userId",
    validateResource(deleteUserDTO),
    deleteUserHandler
  );

  app.put(
    "/api/users/:userId",
    validateResource(updateUserDTO),
    updateUserHandler
  );

}

export default routes;
