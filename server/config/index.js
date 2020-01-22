module.exports = {
  http: {
    port: 3000,
    host: 'localhost',
    get fullPath () {
      return `http://${this.host}:${this.port}`
    }
  },

  database: {
    host: '',
    db: ''
  }
}