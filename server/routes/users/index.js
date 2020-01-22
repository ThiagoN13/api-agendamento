const express = require('express')
const router = express.Router()
const UsersController = require('../../controllers/users')

/* GET users listing. */
router.get('/users/:id', UsersController.get)
router.delete('/users', UsersController.delete)
router.put('/users', UsersController.update)
router.post('/users', UsersController.create)

module.exports = router
