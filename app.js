require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors")

const port = process.env.PORT || 8006;

app.get("/", (req,res) => {
    res.send(`Server start at port no: ${port}`)
})

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, () => {
    console.log(`Server start at port no: ${port}`)
})