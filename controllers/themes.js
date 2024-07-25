const { getAllThemes } = require('../services/themes')

function getThemes(req, res) {
    try {
        const themes = getAllThemes()
        res.send(themes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getThemes
}