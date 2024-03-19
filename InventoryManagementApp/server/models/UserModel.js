const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      trim: true,
      unique: [true, 'Email already exists'],
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: [true, 'Email is required']
    },
    created: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date,
      default: Date.now
    },
    hashed_password: {
      type: String,
      required: [true, 'Password is required']
    },
    salt: String
  });
  
  module.exports = mongoose.model('User', UserSchema);