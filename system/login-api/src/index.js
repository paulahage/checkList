const fs = require('fs')
const express = require('express')
const app = express()
const jwt = require("jsonwebtoken");
const uuid = require('uuid');
app.use(require('express-session')({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(require('body-parser').urlencoded({ extended: true }));

const secret_client_ids = ['4562476697']
const users = [
    'c7ba72cd-5243-4032-bb5f-8c462785c541',
    '974c96f2-7e8a-450c-b6d4-eafdf7a00b56',
    'ec8bf12d-3c44-4273-9da7-5859d9b76a04',
]

let authorizationCode = uuid.v4()

app.get('/authorize', (req, res) => {
    const { secret_client_id, redirect_uri  } = req.query

    if(!secret_client_id) {
        return res.status(400).send("Missing 'secret_client_id' parameter")
    }

    const isValidClientId = secret_client_ids.find((x) => x === secret_client_id)
    if(!isValidClientId) {
        return res.status(401).send(`secret_client_id '${secret_client_id}' not authorized`)
    }

    if(!redirect_uri) {
        return res.status(400).send("Missing 'callbackUrl' parameter")
    }

    req.session.callbackUrl = redirect_uri

    res.sendFile(__dirname + '/login.html');
})

app.get('/isValid', (req, res) => {
    const { token  } = req.query

    if(token === authorizationCode) {
        return res.status(202)
    }

    return res.status(401)
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    req.session.email = email

    authorizationCode = uuid.v4()

      var user = users[Math.floor(Math.random()*users.length)];
      const token = jwt.sign(
        { 
            user_id: user,
            token_id: authorizationCode,
         },
        'somekey',
        {
          expiresIn: "10m",
        }
      );

    console.log("authorization code: " + authorizationCode)

    res.redirect(`${req.session.callbackUrl}?jwt=${token}`)
})

app.listen(80 , () => console.log("running on :80"))