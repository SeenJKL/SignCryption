const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const uri =
  "mongodb+srv://seen13733:Spot4AJakkarin@signcryption.aki7mfo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  client.connect((err) => {
    const collection = client.db("test").collection("mycollection");
    collection.find().toArray((err, items) => {
      res.send(items);
      client.close();
    });
  });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
