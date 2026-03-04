const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    role: String,
    department: String
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;