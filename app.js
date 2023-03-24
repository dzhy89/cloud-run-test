const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Hello, World!'})
})

app.listen(8080, () => {
    console.log('Server has been started')
})
