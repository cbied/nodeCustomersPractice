const express = require('express');
const customers = require('../customers.json')
const firstName = require('./firstName');
const gender = require('./gender')
const app = express()

const port = 9009



app.get('/api/customers', (req,res) => {
    res.status(200).send(customers)
})

// app.get('/api/customers/:gender', gender)
app.get('/api/customers/:firstName', firstName)


app.listen(port, (req,res) => {
    console.log(`${port} is open`)
})