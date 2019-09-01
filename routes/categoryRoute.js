const express = require('express')
require('express-group-routes')

// controller & middleware
const categoryController = require('../controllers/categoryController')

const app = express()

app.group('/api/v1', (router) => {

    router.get('/categories', categoryController.index)
    router.post('/category', categoryController.store)
    router.delete('/category/:id', categoryController.delete)
})

module.exports = app