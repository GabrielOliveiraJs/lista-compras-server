const fs = require('fs')
function getAllItens() {
    return JSON.parse(fs.readFileSync('./db/itens.json'))
}

function getItemById(id) {
    const itens = JSON.parse(fs.readFileSync('./db/itens.json'))

    const filteredItem = itens.filter(item => item.id === id)[0]
    return filteredItem
}

function createNewItem(newItem) {
    const itens = JSON.parse(fs.readFileSync('./db/itens.json'))
    const newListOfItens = [...itens, newItem]

    fs.writeFileSync('./db/itens.json', JSON.stringify(newListOfItens))
}

function deleteItemById(id) {
    let allItens = JSON.parse(fs.readFileSync('./db/itens.json'))
    const filteredItens = allItens.filter(item => item.id !== id)

    fs.writeFileSync('./db/itens.json', JSON.stringify(filteredItens))
}

module.exports = {
    getAllItens,
    getItemById,
    createNewItem,
    deleteItemById
}