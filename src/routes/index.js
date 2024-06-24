const express = require('express')
const userSignUp = require('../controllers/user.controller')
const userSignIn = require('../controllers/user.controller')
const router = express.Router()

router.post("/signup", userSignUp)
router.post("/signin", userSignIn)

module.exports = router