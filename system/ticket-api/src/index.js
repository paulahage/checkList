const fs = require('fs')
const express = require('express')
const app = express()
const axios = require('axios')
var cors = require('cors')
app.use(cors());

app.get('/get', async (req, res) => {
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).send("missing authorization bearer header")
    }
    const parsedToken = token.split(' ')[1]
    
    try{
        const request = axios.get(`http://login/isValid?token=${parsedToken}`)
        if(request.status == 401) {
            return res.status(401)
        }

        const destinationsFile = fs.readFileSync('src/destinations.json', 'utf-8')
        const destinations = JSON.parse(destinationsFile).sort( () => .5 - Math.random() );

        res.send(destinations)
    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.listen(80 , () => console.log("running on :80"))