const express = require('express')
const userSignUp = require('../controllers/userController')

const router = express.Router()

router.post('/sign-up', userSignUp)

module.exports = router