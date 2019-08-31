const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(cors())

// routes
const authRoute = require('./routes/authRoute')
const dormsRoute = require('./routes/categoriesRoute')
const usersRoute = require('./routes/menusRoute')

app.use(authRoute)
app.use(usersRoute)
app.use(dormsRoute)

app.listen(PORT, () => console.log(`listening on port ${process.env.PORT}!`))
