const api = require('express').Router()

module.exports = api

const fs = require('fs')
const { join } = require('path')
const contentDir = __dirname

function isDirectory (path) {
  return fs.existsSync(path) && fs.statSync(path).isDirectory()
}

function isFile (path) {
  return fs.existsSync(path) && fs.statSync(path).isFile()
}

/**
 * Importar dinamicamente as rotas quando encontrar os arquivos index.js nas pastas
 */
for (let child of fs.readdirSync(contentDir)) {
  try {
    let path = join(contentDir, child)
    if (isDirectory(path)) {
      let indexFile = join(path, 'index.js')
      if (isFile(indexFile)) {
        const router = require(indexFile)
        api.use('/api', router)
      }
    }
  } catch (e) {
    // erro com o diretorio, igonorar e continuar
    console.error(e)
  }
}
