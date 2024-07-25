const fs = require('fs')
function getAllThemes() {
    return JSON.parse(fs.readFileSync('./db/themes.json'))
}

module.exports = {
    getAllThemes
}