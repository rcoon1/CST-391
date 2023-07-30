import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import productsRouter from './products/products.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helemt from 'helmet';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());


app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(helemt());
console.log(process.env.MY_SQL_DB_HOST);

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req: Request, res: Response) => {
    res.send('Products API Milestone');
});


app.use('/', [productsRouter]);

app.listen(port, () => {
    console.log(process.env.GREETING);

    console.log(`Example app listening at http://localhost:${port}`)

});