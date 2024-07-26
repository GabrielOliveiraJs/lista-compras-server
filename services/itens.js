const fs = require('fs')
function getAllItens() {
    return JSON.parse(fs.readFileSync('./db/itens.json'))
}

function createNewItem(newItem) {
    const itens = JSON.parse(fs.readFileSync('./db/itens.json'))
    const newListOfItens = [...itens, newItem]

    fs.writeFileSync('./db/itens.json', JSON.stringify(newListOfItens))
}

function alterItem(modifications, id) {
    let currentItems = JSON.parse(fs.readFileSync('./db/itens.json'))
    const modifiedIndex = currentItems.findIndex(item => item.id === Number(id))

    const modifiedContent = { ...currentItems[modifiedIndex], ...modifications }

    currentItems[modifiedIndex] = modifiedContent
    fs.writeFileSync('./db/itens.json', JSON.stringify(currentItems))
}

function deleteItemById(id) {
    const itens = JSON.parse(fs.readFileSync('./db/itens.json'))
    const filteredItens = itens.filter(item => item.id !== Number(id))

    fs.writeFileSync('./db/itens.json', JSON.stringify(filteredItens))
}

module.exports = {
    getAllItens,
    createNewItem,
    alterItem,
    deleteItemById
}