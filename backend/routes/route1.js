const express = require('express');
const route1 = express.Router();
const {connection} = require('../mongoDB/connection');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

async function mongoDB() {
    try {
        const database = connection.db("ercmis_database");
        const collection = database.collection("ercmis_collection");
        const names = database.listCollections({}, { nameOnly: true });
        const tables = [];
        for await (const doc of names) { tables.push(doc); console.log(doc) } 
        const rslt = await collection.findOne({_id: new ObjectId('6887964aa07a7437676f578a')}).then(result => { if(result) { console.log('Successfully found document: ', result); } else { console.log("No document matches the provided query."); } return {tables:[...tables], info:result}; }).catch(err => {console.error('Failed to find document: ', err); return {tables:[...tables], error: err}});  
        return rslt       
    } catch (error) { console.log('err'); return {...tables, error: error} }
} 

    
route1.get('/api/ercmis',async (req, res) => {
    const dt = await mongoDB()
    console.log(dt)
    res.send({hMessage:'Accessed GET api/ercmis', ...dt})
});

route1.post('/api/ercmis',async (req, res) => {
    const dt = await mongoDB()
    console.log(dt)
    res.send({hMessage:'Accessed POST api/ercmis', ...dt})
});

module.exports = {route1}; 