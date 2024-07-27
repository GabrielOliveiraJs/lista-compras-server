const { getAllThemes, alterTheme } = require('../services/themes')

function getThemes(req, res) {
    try {
        const themes = getAllThemes()
        res.send(themes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchThemes (req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            alterTheme(body, id)  
            res.send('Tema alterado com sucesso')  
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
    getThemes,
    patchThemes
}