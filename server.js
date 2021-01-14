const express = require('express')
const app = express()
const timestamp = require('./src/timestamp.js')

app.use('/public', express.static('public'))

//Serves html with instructions
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

//Serves current UTC timestamp
app.get('/api/timestamp', (req, res) => {
    res.json(timestamp(''))
})

//Serves specified UTC timestmp
app.get('/api/timestamp/:date', (req, res) => {
    res.json(timestamp(req.params.date))
})

app.listen(3000, () => {
    console.log('Listening on port 3000' )
})