const models = require('../models')
const Menu = models.menu

exports.index = (req, res) => {
    Menu.findAll({})
        .then(menus => res.status(200).send(menus))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const categoryId = req.params.id

    Menu.findAll({ where: { categoryId } })
        .then(menu => {
            if (menu) {
                return res.status(200).send(menu)
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))

}

exports.store = (req, res) => {
    const data = req.body

    Menu.create(data)
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    Menu.destroy({ where: { id } })
        .then(menu => {
            if (menu) {
                return res.status(204).send({ message: 'deleted' })
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

