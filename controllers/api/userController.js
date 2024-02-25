const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require ('dotenv').config()
/*
router.post('/signUp', userCtrl.signUp)
router.post('/logIn', userCtrl.logIn)
router.put('/:id', userCtrl.auth, userCtrl.updateUser)
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
router.get('/:id', userCtrl.auth, userCtrl.showUser)
*/

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const payloadFromJWT = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: payloadFromJWT._id })
        if (!user) {
          throw new Error()
        }
        req.user = user
        next()
      } catch (error) {
        res.status(401).send('Not authorized')
      }
}

exports.signUp = async(req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json({user, token})
    } catch(error){
        res.status(400).json({msg: error.messag})
    }   
}

exports.logIn = async(req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user || !await bcrypt.compare(req.body.password, user.password)) return 'bad credentials'
        const token = await user.generateAuthToken()
        res.json({user, token})
    } catch(error){
        res.status(400).json({msg: error.messag})
    }
}

exports.deleteUser = async(req, res) => {
    try {
        await req.user.deleteOne()
        res.json({ message: 'User deleted' })
    } catch(error){
        res.status(400).json({msg: error.messag})
    }
}

exports.showUser = async(req, res) => {
    try {
        const user = await User.findOne({_id:req.params.id})
        res.json(user)
    } catch(error){
        res.status(400).json({msg: error.messag})
    }
}

exports.updateUser = async(req, res) => {
    try {
        const updates = Object.keys(req.body)
        updates.forEach(update=> req.user[update] = req.body[update])
        await req.user.save()
        res.json(req.user)
    } catch(error){
        res.status(400).json({msg: error.messag})
    }
}