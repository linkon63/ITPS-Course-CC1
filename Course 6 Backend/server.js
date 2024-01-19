const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:passwordcc1@cluster0.uzrx08v.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const app = express()
app.use(cors())
const port = 8080

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


async function run() {
    try {
        const dbName = "cc1";
        const collectionName = "recipes";

        // Create references to the database and collection in order to run
        // operations on them.
        const client = new MongoClient(uri);
        const database = await client.db(dbName);
        const collection = await database.collection(collectionName);
        const collectionUser = await database.collection('users');
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        console.log('Database connection established🧑‍💻')



        app.get('/', (req, res) => {
            res.send('Your backend is working ...')
        })

        app.get('/users', (req, res) => {
            console.log('users data are trying to access')
        })

        app.get('/posts', (req, res) => {
        })

        app.post('/create-user', jsonParser, (req, res) => {
            console.log('req', req.body)
        })

        app.post('/create-many-recipes', jsonParser, async (req, res) => {
            console.log('req', req.body)
            const allRecipes = req.body.recipes
            console.log('⭐⭐ recipes', allRecipes)

            try {
                const insertManyResult = await collection.insertMany(allRecipes);
                console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
            } catch (err) {
                console.error(`Something went wrong trying to insert the new documents : ${err}\n`);
            }
            res.send('Recipes data are send to the mongodb server successfully 🚨')
        })

        app.post('/create-many-users', jsonParser, async (req, res) => {
            console.log('req', req.body)
            const allUsers = req.body
            console.log('⭐⭐ allUsers', allUsers)

            try {
                const insertManyResult = await collectionUser.insertMany(allUsers);
                console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
            } catch (err) {
                console.error(`Something went wrong trying to insert the new documents : ${err}\n`);
            }
            res.send('Users data are send to the mongodb server successfully 🚨')
        })


    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})