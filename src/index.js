const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const userRoutes = require('../src/routes/user.routes.js')


//middleware
app.use(express.json());
app.use('/api', userRoutes);


//routes
app.get("/", (req, res) => {
    res.send("welcome to de jungle");
});
//mongodb conexion

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Conectado a Atlas");
    })
    .catch((error) => {
        console.error(error);
    });


app.listen(port, () => {
    console.log(
        `la conexion es correcta y se esta ejecutando en el puerto ${port}`
    );
});