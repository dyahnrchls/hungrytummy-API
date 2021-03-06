const models = require('../models')
const Transaction = models.transaction
const Order = models.order
const Menu = models.menu

exports.index = (req, res) => {
    Transaction.findAll({ attributes: ['id', 'tableNumber', 'finishedTime', 'subtotal', 'discount', 'serviceCharge', 'tax', 'total', 'isPaid', 'createdAt', 'updatedAt'] })
        .then(transactions => res.status(200).send(transactions))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    Transaction.findOne({
        include: [
            {
                model: Order,
                include: [
                    { model: Menu }
                ]
            }
        ],
        where: { id }
    })
        .then(transaction => {
            if (transaction) {
                return res.status(200).send(transaction)
            } else {
                return res.status(400).send({ message: 'transaction not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body

    Transaction.create(data)
        .then(transaction => res.status(200).send(transaction))
        .catch(err => res.status(400).send(err))
}

exports.update = (req, res) => {
    Transaction.findOne({ where: { id: req.params.id } })
        .then(transaction => {
            return transaction.update(req.body)
                .then(transaction => res.status(200).send(transaction))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    Transaction.destroy({ where: { id } })
        .then(transaction => {
            if (transaction) {
                return res.status(204).send({ message: 'deleted' })
            } else {
                return res.status(400).send({ message: 'transaction not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

