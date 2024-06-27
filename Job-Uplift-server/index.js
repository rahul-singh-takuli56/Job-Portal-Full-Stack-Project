const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const multer = require('multer')
require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()} - ${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal-website.sskyu2u.mongodb.net/?retryWrites=true&w=majority&appName=Job-Portal-Website`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const db = client.db('mernJobPortal');
        const jobsCollection = db.collection("demoJobs");

        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createAt = new Date();
            const result = await jobsCollection.insertOne(body);
            if (result.insertedId) {
                return res.status(200).send(body);
            } else {
                return res.status(404).send({
                    message: "Can not insert! try again later please...",
                    status: false
                });
            }
        });

        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobsCollection.find({}).toArray();
            res.send(jobs);
        })

        app.get("/all-jobs/:id", async (req, res) => {
            const id = req.params.id;
            const job = await jobsCollection.findOne({
                _id: new ObjectId(id)
            })
            res.send(job);
        })

        app.get("/myJobs/:email", async (req, res) => {
            // console.log(req.params.email);
            const jobs = await jobsCollection.find({ postedBy: req.params.email }).toArray();
            res.send(jobs);
        })


        app.delete("/job/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await jobsCollection.deleteOne(filter);
            res.send(result);
        })

        app.patch("/update-job/:id", async (req, res) => {
            const id = req.params.id;
            const jobData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    ...jobData
                },
            };

            const result = await jobsCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch {
        console.log('Some Error Occured ... 😔');
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})