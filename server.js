const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(cors())

// routes
const categoryRoute = require('./routes/categoryRoute')
const menuRoute = require('./routes/menuRoute')
const orderRoute = require('./routes/orderRoute')
const transactionRoute = require('./routes/transactionRoute')

app.use(categoryRoute)
app.use(menuRoute)
app.use(orderRoute)
app.use(transactionRoute)

// app.listen(PORT, () => console.log(`listening on port ${PORT}!`))

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}!`))