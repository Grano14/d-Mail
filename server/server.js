const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//get driver connection
app.use(require("./routes/record"));
//get dbo object which contains the database connection method 
const dbo = require("./db/conn");
app.listen(port, () => {
    //perform the database connection when server start
    dbo.connectToServer();
    console.log('Server is running on port: ' + port)
})