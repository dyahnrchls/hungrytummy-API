const express = require('express')
require('express-group-routes')

// controller & middleware
const orderController = require('../controllers/orderController')

const app = express()

app.group('/api/v1', (router) => {

    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    router.get('/order/transaction/:id', orderController.orderByTransaction)
    router.post('/order', orderController.store)
    router.patch('/order/:id', orderController.update)
    router.delete('/order/:id', orderController.delete)

})

module.exports = app