const router = require('express').Router()
router.use('/food', require('./food'))
router.use('/user', require('./user'))
router.use('/foodHistory', require('./foodHistory'))
router.use('/purchaseHistory', require('./purchaseHistory'))

module.exports = router