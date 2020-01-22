const express = require('express')
const router = express.Router()
const RulesController = require('../../controllers/rules')

/* GET users listing. */
router.get('/rules', RulesController.get)

module.exports = router