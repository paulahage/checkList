const fs = require('fs')
const express = require('express')
const app = express()
const axios = require('axios')


const destinationsFile = fs.readFileSync('src/status.json', 'utf-8')
const destinations = JSON.parse(destinationsFile).sort( () => .5 - Math.random() );

app.get('/getCurrent', (req, res) => {
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

        const destinationsPrice = destinations.map((destination) => {
            const luck = Math.random()
            if(luck > 0.7) {
                destination.price = destination.price - (destination.price * 0.2)
            }

            return destination
        })

        return res.send(destinationsPrice)
    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.get('/getFull', (req, res) => {
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

  

        return res.send(destinations)
    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.listen(80 , () => console.log("running on :80"))