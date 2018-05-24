// user.js
// Created by fanyingmao 五月/24/2018
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    name: { type: String },
    loginname: { type: String },
    pass: { type: String },
    email: { type: String },
    rand: { type: Number },
    create_at: { type: Date, default: Date.now },
  });

  UserSchema.virtual('isAdvanced').get(function() {
    return this.name;
  });

  UserSchema.pre('save', function(next) {
    const now = new Date();
    this.update_at = now;
    next();
  });
  return mongoose.model('User', UserSchema);
};
