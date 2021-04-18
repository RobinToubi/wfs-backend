import { ConnectionOptions } from "mongoose";

// MONGO URL
const password = "BQGGEfDjkuBRm91v";
const username = "abel";
const databaseName = 'webfullstack'

export const MONGO_URL = "mongodb+srv://" + username + ":" + password + "@cluster0.6jyqv.mongodb.net/" + databaseName + "?retryWrites=true&w=majority";

// CONNECT TO DB
export const options: ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}