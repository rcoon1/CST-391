import dotenv from 'dotenv';
import express from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
dotenv.config({ path: './.env'});
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

// Create an instance of the Express application.
const app = express();

// Set the port number for the application.
const port = 3000;

app.use('/', [albumsRouter, artistsRouter]);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Start the application and listen for incoming requests on the specified port.
app.listen(port, () => {
    // Display a message in the console to indicate that the application is running.
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(process.env.GREETING)
});

if (process.env.NODE_ENV == 'development') {
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}
