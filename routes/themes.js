const { Router } = require("express")
const { getThemes } = require('../controllers/themes')

const router = Router()

router.get('/', getThemes)


module.exports = router