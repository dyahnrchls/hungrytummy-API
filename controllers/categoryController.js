const models = require('../models')
const Category = models.category
const menu = models.menu

exports.index = (req, res) => {
    Category.findAll({})
        .then (categorys => res.status(200).send(categorys))
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body

    Category.create(data)
        .then(category => res.status(200).send(category))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id
    
    Category.destroy({where: {id}})
        .then(category => {
            if (category) {
                return res.status(204).send({ message: 'deleted' })
            } else {
                return res.status(400).send({ message: 'category not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

