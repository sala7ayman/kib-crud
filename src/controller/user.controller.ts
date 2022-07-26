import { Request, Response } from "express";
import logger from "../utlis/logger";
import StatusCode from "status-code-enum";
import { createUser, deleteUser, findAndUpdateUser, getUser } from "../service/user.service";
import { CreateUserInput, DeleteUserDTO, GetUserDTO, UpdateUserInput } from "../dto/user.dto";
import {omit} from "lodash";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response) {
    try {
        const user = await createUser(req.body);
        return res.status(StatusCode.SuccessCreated).send(omit(user.toJSON(),"password"));
    } catch (e: any) {
        logger.error(e);
        return res.status(StatusCode.ClientErrorConflict).send(e.message);
    }
}


export async function getUserHandler(
    req: Request<GetUserDTO["params"]>,
    res: Response
  ) {
    const userId = req.params.userId;
  
  
    const user = await getUser ({ userId });
  
    if (!user) {
      return res.sendStatus(StatusCode.ClientErrorNotFound);
    }

     return res.status(StatusCode.SuccessOK).send(omit(user,"password"));

}


  export async function deleteUserHandler(
    req: Request<DeleteUserDTO["params"]>,
    res: Response
  ) {
    const userId = req.params.userId;
    
    const user = await getUser ({ userId });
  
    if (!user) {
      return res.sendStatus(StatusCode.ClientErrorNotFound);
    }

    await deleteUser ({ userId });
    
    return res.status(StatusCode.SuccessNoContent).send(StatusCode.SuccessOK);
  }


  export async function updateUserHandler(
    req: Request<UpdateUserInput["params"]>,
    res: Response
  ) {
    const userId = req.params.userId;
  
    const update = req.body;
  
    const user = await getUser({ userId });
  
    if (!user) {
      return res.sendStatus(StatusCode.ClientErrorNotFound);
    }

    const updateUser = await findAndUpdateUser({ userId }, update, {
      new: true,
    });
  
    return res.send(StatusCode.SuccessOK);
}