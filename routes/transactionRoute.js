const express = require('express')
require('express-group-routes')

// controller
const transactionController = require('../controllers/transactionController')

const app = express()

app.group('/api/v1', (router) => {

    router.get('/transactions', transactionController.index)
    router.get('/transaction/:id', transactionController.show)
    router.patch('/transaction', transactionController.update)
    router.post('/transaction', transactionController.store)
    router.delete('/transaction/:id', transactionController.delete)

})

module.exports = app