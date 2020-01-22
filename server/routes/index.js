const api = require('express').Router()

const fs = require('fs')
const { join } = require('path')
const { isDirectory, isFile } = require('../lib/folder')
const contentDir = __dirname
const basePath = '/api'

/**
 * Importar dinamicamente as rotas quando encontrar os arquivos index.js nas pastas
 */
for (let child of fs.readdirSync(contentDir)) {
  try {
    let path = join(contentDir, child)
    if (isDirectory(path)) {
      let indexFile = join(path, 'index.js')
      if (isFile(indexFile)) {
        console.log(`Route registered: ${basePath}/${child}`)
        const router = require(indexFile)
        api.use(basePath, router)
      }
    }
  } catch (e) {
    // erro com o diretorio, igonorar e continuar
    console.error(e)
  }
}

module.exports = api
