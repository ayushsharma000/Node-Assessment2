const express = require('express');


const server = express();

// Create a server using express and create route /api/main and send the response explaining what is express

server.get("/api/main", (req, res) => {
    res.send("Welcome to the main page")
})


server.listen(4000, () => {
    console.log("New Sever Started");
})