const express = require('express')
const router = express.Router()
const { detail } = require('../controllers/detailController')


router.get('/:id', detail)


module.exports = router