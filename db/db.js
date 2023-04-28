const {MongoClient} = require('mongodb');

const conncetDB = async () => {
    try {
        const client = await MongoClient.conncetDB(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = client.db(process.env.DB_NAME);
        const professionalInfo = db.collection(process.env.DB_COLLECTION_NAME);
        console.log('MongoDB Connected!');
        return professionalInfo;
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

module.exports = { conncetDB };