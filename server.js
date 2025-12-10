const express = require('express')
const app = express()
PORT = 3000
const moviesRouter = require('./routers/movies')

app.get('/', (req, res) => {
    res.send('Server of my movies')
})

// Connect the routers to server
app.use('/movies', moviesRouter)

// See in the terminal the number of port
app.listen(PORT, () => {
    console.log(`Server listen in port: ${PORT}`)
})