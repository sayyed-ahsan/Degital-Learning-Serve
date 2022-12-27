const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config(); // import env file if use environment variables after install || npm install dotenv --save|| ane Create a .env file in the root of your project:

const port = process.env.PORT || 5000;
const app = express();

// used Middleware
app.use(cors());
app.use(express.json());


// group
// jskdNKEzv6hJVVwh


const uri = "mongodb+srv://group:jskdNKEzv6hJVVwh@cluster0.rfsudbi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create a async fucntion to all others activity
async function run() {
    try {
        await client.connect();

        //-----------------
        const testCollection = client.db("partsala").collection("categories");
        console.log('click')
        //-----------------
        app.get('/categories', async (req, res) => {
            const quary = {};
            const categories = await testCollection.find(quary).toArray();
            res.send(categories);
        });
        //-----------------

    } finally {
        // await client.close();
    }
}

run().catch(console.dir);
// ----------------------------------------------------------------------------------


app.listen(port, () => {
    console.log(`NR Computers listening on port ${port}`);
});