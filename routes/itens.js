const { Router } = require("express")
const { getItens, createItem, deleteItem } = require('../controllers/itens')

const router = Router()

router.get('/', getItens)

router.post('/', createItem)

router.delete('/:id', deleteItem)


module.exports = router