const fs = require('fs')

function isDirectory (path) {
  return fs.existsSync(path) && fs.statSync(path).isDirectory()
}

function isFile (path) {
  return fs.existsSync(path) && fs.statSync(path).isFile()
}

module.exports = {
  isDirectory,
  isFile
}