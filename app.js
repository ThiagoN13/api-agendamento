const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const routes = require('./server/routes')

const app = express()

// parse application/x-www-form-urlencoded
app.use(express.json())
// parse application/json
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
// Include routes
app.use(routes)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
