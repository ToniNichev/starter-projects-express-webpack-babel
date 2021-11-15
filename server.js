const express = require("express");




const app = express();
const port = process.env.PORT || "8000";

app.get("/", async (req, res) => {
    res.status(200).send("Hello world!");    
});

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});