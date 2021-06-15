'use strict'

const router = require('express').Router()

router.use('/history', require('./history'))
router.use('/stats', require('./stats'))
router.use('/countries', require('./countries'))

router.use((req, res, next) => {
    const err = new Error('API route note found!')
    err.status = 404
    next(err)
})


module.exports = router 