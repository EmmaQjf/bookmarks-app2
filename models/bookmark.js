const{model, Schema} = require('mongoose')

const bookmarkSchema = new Schema({
    title: {type: String, required: true},
    url:{type: String, required: true},
    user:{type: Schema.Types.ObjectId, ref:'User'}
})

const Bookmark = model('Bookmark', bookmarkSchema)
module.exports = Bookmark