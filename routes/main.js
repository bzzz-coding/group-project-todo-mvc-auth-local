const express = require('express')
// setting express Router functionality
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')

// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/about', homeController.getAbout)
router.get('/contact', homeController.getContact)

module.exports = router