const { Router } = require("express")
const { getItens, createItem, deleteItem, patchItem } = require('../controllers/itens')

const router = Router()

router.get('/', getItens)

router.post('/', createItem)

router.patch('/:id', patchItem)

router.delete('/:id', deleteItem)


module.exports = router