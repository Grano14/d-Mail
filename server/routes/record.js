const express = require("express");

//recordRoutes is an instance of the express.Router().
//we use it to define our routes.
//the router will be added as a middleware and will take control of request starting with path /record.
const recordRoutes = express.Router();
const dbo = require("../db/conn");
//this help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.get("/record", (req, res) => {
    res.send({data: "ollare"});
});

recordRoutes.get("/address", async (req, res) => {
    console.log("sono stata chiamata!");
    let db_connection = dbo.getDb("d-MailDB");
    //console.log(db_connection);
    let mails = db_connection.collection("mail");
    let data = await mails.find({}).toArray(function (err, result){
        if(err) throw err;
    });
    console.log(data);
    res.send(data);
});

module.exports = recordRoutes;