// user.js
// Created by fanyingmao 五月/24/2018
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async register(param) {
    return this.ctx.model.User.insert(param).exec();
  }

  async login(names) {
    if (names.length === 0) {
      return [];
    }

    const query = { loginname: { $in: names } };
    return this.ctx.model.User.find(query).exec();
  }
}

module.exports = UserService;