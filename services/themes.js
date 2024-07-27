const fs = require('fs')
function getAllThemes() {
    return JSON.parse(fs.readFileSync('./db/themes.json'))
}

function alterTheme(modifications, id) {
    let currentThemes = JSON.parse(fs.readFileSync('./db/themes.json'))
    const modifiedIndex = currentThemes.findIndex(theme => theme.id === Number(id))
    const modifiedContent = { ...currentThemes[modifiedIndex], ...modifications }

    currentThemes[modifiedIndex] = modifiedContent
    fs.writeFileSync('./db/themes.json', JSON.stringify(currentThemes))
}

module.exports = {
    getAllThemes,
    alterTheme
}