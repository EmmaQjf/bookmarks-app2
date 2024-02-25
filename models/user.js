require('dotenv').config()
const {Schema, model} = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    bookmarks:[{type: Schema.Types.ObjectId, ref:'Bookmark'}]
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
    } else {
        null
    }
    next()
})

userSchema.methods.generateAuthToken = async function(){
    const token = await jwt.sign({_id: this.id, user: this}, process.env.SECRET)
    return token
}

const User = model('User', userSchema)
module.exports = User