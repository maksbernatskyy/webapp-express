const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const moviesRouter = require('./routers/movies')
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notFound')

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send('Server of my movies')
})

// Connect the routers to server
app.use('/movies', moviesRouter)

// Error 500
app.use(errorsHandler)

// Error 404
app.use(notFound)

// See in the terminal the number of port
app.listen(PORT, () => {
    console.log(`Server listen in port: ${PORT}`)
})