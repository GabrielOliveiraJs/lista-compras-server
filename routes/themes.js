const { Router } = require("express")
const { getThemes, patchThemes } = require('../controllers/themes')

const router = Router()

router.get('/', getThemes)

router.patch('/:id', patchThemes)


module.exports = router