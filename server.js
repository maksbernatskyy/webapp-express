const express = require('express')
const app = express()
PORT = 3000

app.get('/', (req, res) => {
    res.send('Server of my movies')
})

app.listen(PORT, () => {
    console.log(`Server listen in port: ${PORT}`)
})