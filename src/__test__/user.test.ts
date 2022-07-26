import StatusCode from 'status-code-enum'
import supertest from 'supertest'
import express from 'express'



//define const values
const app = express();


describe('user', () => {
    describe('get user route', () => {
        describe('given the user not exist', () => {
            it('should return not found 404', async () => {
                const userId = 'user-123';
                await supertest(app).get(`/api/users/${userId}`).expect(StatusCode.ClientErrorNotFound)
            })
        })
    });
});


