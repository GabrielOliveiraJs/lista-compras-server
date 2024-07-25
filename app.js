const express = require('express')
const cors = require('cors')
const itensRoute = require('./routes/itens')
const themesRoute = require('./routes/themes')

const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/itens', itensRoute)
app.use('/themes', themesRoute)


const port = 8000
app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})


