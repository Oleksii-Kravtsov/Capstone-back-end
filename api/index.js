const router = require('express').Router()
router.use('/food', require('./food'))
router.use('/user', require('./user'))

module.exports = router