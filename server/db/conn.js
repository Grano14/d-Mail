const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = process.env.ATLAS_URI;
//create a MongoClient object to set the uri and the stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//_db variable contains the database instance obtained from MongoDB Atlas
var _db;

module.exports = {
    //function to establish a cnnection to the database
    connectToServer: async function(){
        try{
            //connect the client to the server
            await client.connect();
            //send a ping to confirm a successful connection
            await client.db("d-MailDB").command({ping: 1});
            _db = await client.db("d-MailDB");
            console.log("Connection to MongoDB established!");
        } catch(error) {
            console.error(error);
        }
    },
    //function to get the istance of the database
    getDb: function(){
        return _db;
    } 
}