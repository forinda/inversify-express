import request from 'supertest';
import express from 'express';
import { userRouter } from '@/modules/users';

const app = express();
app.use(express.json());
app.use('/users', userRouter);

describe('GET /users/:id', () => {
  it('should return a user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ id: 1, name: 'John Doe'});
  });
});
