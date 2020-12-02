const Mongoose = require('mongoose')

const authorSchema = new moongoose.Schema({
    name: { type: String, minlength: 5, maxlength: 20},
    bookTitle: { type: String, minlength: 20},
    numberOfPages: { type: Number, minlength: 10},
    isbn: { type: Number, maxlength: 13},
    bookLikes: { type: Number, minlength:0}
})

const author = mongoose.model(author, authorSchema)