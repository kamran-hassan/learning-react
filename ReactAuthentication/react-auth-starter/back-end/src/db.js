import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb+srv://system:QVEUVUSCHAKmbgkTq@cluster5845.chcpanhb.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
// change your mongo link this a dummy link 
export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}