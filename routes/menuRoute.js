const express = require('express')
require('express-group-routes')

// controller
const menuController = require('../controllers/menuController')

const app = express()

app.group('/api/v1', (router) => {

    router.get('/menus', menuController.index)
    router.get('/menu/category/:id', menuController.show)
    router.post('/menu', menuController.store)
    router.delete('/menu:id', menuController.delete)

})

module.exports = app