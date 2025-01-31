import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import our projects
import Project from './models/projectSchema.mjs';

dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.MONGO_URI;

// make express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// test app
app.get('/', (req, res) => {
    try {
        res.json({
            message: 'hello'
        });
    } catch(err) {
        console.error('Could not get /', err);
    }
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
        // log projects if status === 200
        if (res.status(200)) {
            console.log(projects);
        }
    } catch(err) {
        console.error('Could not get /projects', err);
    }
});

// connect to db
mongoose.connect(DB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Could not connect to MongoDB', err);
    });

app.listen(PORT, () => {
    try {
        console.log('Listening on port', PORT);
    } catch(err) {
        console.error(`Could not listen on port ${PORT}`, err);
    }
});