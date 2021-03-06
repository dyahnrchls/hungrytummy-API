const models = require('../models')
const Order = models.order
const Menu = models.menu

exports.index = (req, res) => {
    Order.findAll({})
        .then(orders => res.status(200).send(orders))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    Order.find({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(200).send(order)
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))

}

exports.orderByTransaction = (req, res) => {
    const id = req.params.id

    Order.findAll({
        include: [{ model: Menu }],
        where: { transactionId: id }
    })
        .then(order => {
            if (order) {
                return res.status(200).send(order)
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body

    Order.create(data)
        .then(order => res.status(200).send(order))
        .catch(err => res.status(400).send(err))
}

exports.update = (req, res) => {
    Order.findOne({ where: { id: req.params.id } })
        .then(order => {
            return order.update(req.body)
                .then(order => res.status(200).send(order))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    Order.destroy({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(204).send({ message: 'deleted' })
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

