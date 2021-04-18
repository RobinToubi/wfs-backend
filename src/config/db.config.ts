import { ConnectionOptions } from "mongoose";

// MONGO URL
const password = "Ui7p89R9SSEDsIk8";
const username = "robin";
const databaseName = 'webfullstack';
export const MONGO_URL = "mongodb+srv://" + username + ":" + password + "@cluster0.6jyqv.mongodb.net/" + databaseName + "?retryWrites=true&w=majority";

// CONNECT TO DB
export const options: ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}