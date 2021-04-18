import express from 'express';
import cors from 'cors';
import { router } from './app.router';
import { errorMiddleware } from './common/error/error.middleware';
import { logMiddleware } from './common/log.middleware';
import mongoose from 'mongoose';
import { MONGO_URL, options} from './config/db.config';

export const app = express();

mongoose.connect(MONGO_URL, options).then(() => {
    console.log("MongoDB Connection Succeeded to db");
}).catch((err) => {
    console.log("Error in DB connection: " + err);
});

// Show database actions
mongoose.set("debug", true);

app.use(cors());
app.use(logMiddleware);
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
