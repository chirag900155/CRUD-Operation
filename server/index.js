import express from 'express';
import Connection from './Database/db.js';
import Router from './router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

const PORT = 8000;

app.use(bodyParser.json({ extended: true }))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.use('/', Router)

Connection();

app.listen(PORT, ()=>{ console.log(`Server is running http://localhost:${PORT}`) })