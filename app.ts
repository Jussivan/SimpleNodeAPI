import express from 'express';
import { UserController } from './src/controllers/UserController';

const app = express();
app.use(express.json());

app.get('/users', UserController.getAll);
app.get('/users/:id', UserController.getById);
app.post('/users', UserController.create);
app.delete('/users/:id', UserController.delete);

export default app;
