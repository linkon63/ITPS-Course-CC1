const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// Your mongodb uri
const uri = "mongodb+srv://user:passwordcc1@cluster0.uzrx08v.mongodb.net/?retryWrites=true&w=majority";
; // Setup your mongodb uri
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(cors());
const port = 8080 || 8088 || 3000 || 3030;
// create application/json parser
const jsonParser = bodyParser.json();

async function run() {
  try {
    // Create references to the database and collection in order to run
    // operations on them.
    const client = new MongoClient(uri);

    // Connect the client to the server	(optional starting in v4.7)
    await client
      .connect()
      .catch((err) => console.error("Connection error : ", err));

    console.log("Database connection established 🧑‍💻...");
    const db = await client.db('cc1')

    app.get("/", (req, res) => {
      res.send("Your backend is start working 🧑‍💻...");
    });
    //  users crud operations [admin - client ]
    app.get("/users", async (req, res) => {
      const userCollection = await db.collection("users")
      const users = await userCollection.find().toArray();
      res.json({ users: users, status: 'ok', code: 200 });
    });
    // users registration
    app.post("/users", jsonParser, async (req, res) => {
      console.log('data', req.body)
      const userCollection = await db.collection("users")
      await userCollection.insertOne(req.body);
      res.json({ users: req.body, status: 'ok', code: 200 });
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id
      const userCollection = await db.collection("users")
      const users = await userCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });
    //client validation checking
    app.post("/users/validation", jsonParser, async (req, res) => {
      const data = req.body
      const userCollection = await db.collection("users")
      const users = await userCollection.findOne({ "email": data.email, "password": data.password });
      if (users) {
        res.json({ users: users, status: 'ok', code: 200 });
      } else {
        res.json({ users: [], status: 'failure', code: 404 });
      }
    });
    //admin validation checking
    app.post("/admin/validation", jsonParser, async (req, res) => {
      const data = req.body
      const userCollection = await db.collection("admin")
      const users = await userCollection.findOne({ "email": data.email, "password": data.password });
      if (users) {
        res.json({ users: users, status: 'ok', code: 200 });
      } else {
        res.json({ users: [], status: 'failure', code: 404 });
      }
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id
      const userCollection = await db.collection("users")
      const users = await userCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });

    // products crud operations [admin]
    app.get("/products", async (req, res) => {
      const productsCollection = await db.collection("products")
      const products = await productsCollection.find().toArray();
      res.json({ products: products, status: 'ok', message: 'All products data', code: 200 });
    });

    app.post("/products", jsonParser, async (req, res) => {
      const productsCollection = await db.collection("products")
      await productsCollection.insertOne(req.body);
      res.json({ products: req.body, status: 'ok', message: 'Product created successfully', code: 200 });
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id
      const productsCollection = await db.collection("products")
      const products = await productsCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ products: products, status: 'ok', message: 'Product get successfully', code: 200 });
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id
      const productsCollection = await db.collection("products")
      const products = await productsCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ products: products, status: 'ok', message: 'Product deleted successfully', code: 200 });
    });

    // orders crud operations [admin - client]
    app.get("/orders/:email", async (req, res) => {
      const email = req.params.email
      console.log('email', email)

      // for the client
      if (email) {
        try {
          const orderCollection = await db.collection("orders")
          const orders = await orderCollection.find({ email: email }).toArray();
          res.status(200).json({ orders: orders, status: 'ok', message: 'All orders data for the client', code: 200 });
        } catch (error) {
          res.send(error)
        }
      }
      // for the admin
      // const orderCollection = await db.collection("orders")
      // const orders = await orderCollection.find().toArray();
      // res.json({ orders: orders, status: 'ok', message: 'All orders data', code: 200 })

    });

    // for the admin all orders showing
    app.get("/admin/orders/", async (req, res) => {
      const orderCollection = await db.collection("orders")
      const orders = await orderCollection.find().toArray();
      res.json({ orders: orders, status: 'ok', message: 'All orders data', code: 200 })

    });

    // for the admin order Confirmed 
    app.patch("/admin/order/confirm", jsonParser, async (req, res) => {
      console.log(req.body._id)
      const { _id } = req.body
      const orderCollection = await db.collection("orders")
      console.log(req.body)

      orderCollection.updateOne({orderId: req.body.orderId}, {
        $set : {shipment : req.body.shipment}
      })
      .then((result) => {
        console.log('Order confirm',)
      res.json({ status: 'ok', message: 'Confirmation orders data', code: 200 })
      })

      // try {
      //   const newOrderValues = { $set: { ...req.body } };
      //   await orderCollection.findByIdAndUpdate(req.body._id, req.body, { useFindAndModify: false }).exec();
      // } catch (error) {
      //   console.log('Error Try catch',error)
      // }

      // res.json({ orders: orders, status: 'ok', message: 'All orders data', code: 200 })

    });

    app.post("/orders", jsonParser, async (req, res) => {
      const orderCollection = await db.collection("orders")
      const orders = await orderCollection.insertOne(req.body);
      res.json({ orders: orders, status: 'ok', message: 'Order created successfully', code: 200 })
    });

    app.get("/orders/:id", async (req, res) => {
      const id = req.params.id
      const orderCollection = await db.collection("orders")
      const orders = await orderCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ orders: orders, status: 'ok', message: 'Order get successfully', code: 200 });

    });

    app.delete("/orders/:id", async (req, res) => {
      const id = req.params.id
      const orderCollection = await db.collection("orders")
      const orders = await orderCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ orders: orders, status: 'ok', message: 'Order deleted successfully', code: 200 });
    });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log('Ports are running on :', port);
});
