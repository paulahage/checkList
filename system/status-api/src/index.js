const fs = require('fs')
const express = require('express')
const axios = require('axios')
const app = express()
var cors = require('cors')
app.use(cors());

const destinationsFile = fs.readFileSync('src/status.json', 'utf-8')
const destinations = JSON.parse(destinationsFile).sort( () => .5 - Math.random() );

app.get('/get', (req, res) => {
    const token = req.header('Authorization');
    const { destinationId } = req.query

    if(!token) {
        return res.status(401).send("missing authorization bearer header")
    }
    const parsedToken = token.split(' ')[1]

    const destination = destinations.find(({ id }) => id === destinationId)
    if(!destination){
        return res.status(404).send(`destination "${destinationId}" not found`)
    }

    try{
        const request = axios.get(`http://login/isValid?token=${parsedToken}`)
        if(request.status == 401) {
            return res.status(401)
        }

        const status = Math.random()
        if(status > 0.9) {
            return res.send({ status: 2 })
        }
        if(status > 0.8) {
            return res.send({ status: 1 })
        }

        return res.send({ status: 0 })
    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.listen(80 , () => console.log("running on :80"))