const { Router } = require("express")
const { getItens, getItem, createItem, deleteItem } = require('../controllers/itens')

const router = Router()

router.get('/', getItens)

router.get('/:id', getItem)

router.post('/', createItem)

router.delete('/:id', deleteItem)


module.exports = router