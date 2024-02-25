const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')

router.post('/signup', userCtrl.signUp)
router.post('/login', userCtrl.logIn)
router.put('/:id', userCtrl.auth, userCtrl.updateUser)
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
router.get('/:id', userCtrl.auth, userCtrl.showUser)

module.exports = router