const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.get('/', function(req, res){
    res.send("Hello new world!")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});