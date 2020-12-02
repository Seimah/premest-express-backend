const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    // what to expert
    username: {
        type: String, 
        minlength: [5, 'minimum user name length is 5'], 
        maxlength: [16, 'maximum user name length is 16'],
        unique: true,
        required: [true, 'please enter a username'],
        lowercase: true
    },
    email: {
        type: String, 
        unique: true,
        required: [true, 'the email field is required'],
        lowercase: true
    },
    password: {
        type: String, 
        minlength: 8,
        require: [true, 'you must enter a password'],
    },
    // age: Number
})

const User = mongoose.model('user', userSchema)
// mongoose to match a user using the schema(collection-group of document)

userSchema.pre('save', async function(next){
    const salt = bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    console.log(this.password)
    next()
})

module.exports = User