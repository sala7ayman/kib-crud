import { object, string, TypeOf } from "zod";


const params = {
    params: object({
        userId: string({
            required_error: "userId is required",
        }),
    }),
};

const payload ={
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        password: string({
            required_error: 'password is required'
        }).min(8, "Password too short should be 8 characters minimum"),
        passwordConfirmation: string({
            required_error: 'password confirmation is required'
        }),
        email: string({
            required_error: 'email is required'
        }).email("Not valid email"),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords don't match",
        path: ["passwordConfirmation"]
    }),
}

export const updateUserDTO = object({
    ...payload,
    ...params,
  });


  /**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: test@example.com
 *        name:
 *          type: string
 *          default: Ahmed Ali
 *        password:
 *          type: string
 *          default: Password456!
 *        passwordConfirmation:
 *          type: string
 *          default: Password456!
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
  export const createUserDTO = object({
    ...payload,
  });

  export const getUserDTO = object({
    ...params,
  });

  export const deleteUserDTO = object({
    ...params,
  });

export type CreateUserInput = Omit<
    TypeOf<typeof createUserDTO>,
    "body.passwordConfirmation"
>;

export type UpdateUserInput = Omit<
    TypeOf<typeof updateUserDTO>,
    "body.passwordConfirmation"
>;

export type GetUserDTO = TypeOf<typeof getUserDTO>;

export type DeleteUserDTO = TypeOf<typeof deleteUserDTO>;

