const express = require('express')
require('dotenv').config('.env')
const app = express()
const port = 5000

/* app.use('/', express.json())
app.use(express.static('client')) */

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.listen(port, () => console.log(`listening on port ${port}`))