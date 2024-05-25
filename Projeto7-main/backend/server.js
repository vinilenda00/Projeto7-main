const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())

const personagensRoutes = require('./routes/personagensRoutes')
app.use('/api/personagens', personagensRoutes)

app.use('/public', express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})