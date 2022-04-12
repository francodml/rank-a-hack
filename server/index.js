import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import hackathonRoutes from './apiroutes/hackathons.js';
import userRoutes from './apiroutes/users.js';

const app = express();


app.use( cors() );
app.use( bodyParser.json({limit: "30mb", extended: true}) );
app.use( bodyParser.urlencoded({limit: "30mb", extended: true}) );

app.use( '/hackathons', hackathonRoutes );
app.use( '/users', userRoutes );

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vql6v.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch( err => console.log(err.message) );