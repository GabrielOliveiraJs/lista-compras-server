const { getAllItens, getItemById, createNewItem, deleteItemById } = require('../services/itens')

function getItens(req, res) {
    try {
        const itens = getAllItens()
        res.send(itens)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getItem(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const item = getItemById(id)
            res.send(item)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function createItem(req, res) {
    try {
        const item = req.body
        if (item) {
            createNewItem(item)
            res.status(200)
            res.send('Item criado com sucesso')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteItem(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteItemById(id)
            res.send('Item deletado com sucesso')
        } else {
            res.status(422)
            res.send('Id inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getItens,
    getItem,
    createItem,
    deleteItem
}