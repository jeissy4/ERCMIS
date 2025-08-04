require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PWD}@clusternell.3othxj7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNell`;
const connection = new MongoClient( uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true, } });
async function FDBConnection() {
    try { await connection.connect(); await connection.db("admin").command({ ping: 1 }); console.log('Connection to MONGO successful'); return connection; }
    catch(e) { console.log('error> ', e); process.exit(1); }
}
if (!connection.topology || !connection.topology.isConnected()) { FDBConnection().catch(console.dir); }
module.exports = { connection };