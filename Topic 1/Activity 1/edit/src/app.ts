import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 3000;

// Make sure you understand the following line of code.

app.get('/', (req: Request, res: Response) => {

res.send('Hello World from TypeScript!');

});

app.listen(port, () => {

console.log(`Example app listening at http://localhost:${port}`)

});