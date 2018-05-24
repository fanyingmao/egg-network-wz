// user.js
// Created by fanyingmao 五月/24/2018
'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  /* GET	/posts	posts	app.controllers.posts.index
  GET	/posts/new	new_post	app.controllers.posts.new
  GET	/posts/:id	post	app.controllers.posts.show
  GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
  POST	/posts	posts	app.controllers.posts.create
  PUT	/posts/:id	post	app.controllers.posts.update
  DELETE	/posts/:id	post	app.controllers.posts.destroy
  */
  async create() {
    const { ctx, service } = this;
    const res = await service.user.register(ctx.request.body);
    res.rand = Math.random();
    ctx.body = res;
  }

  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { name } = this.ctx.query;
    ctx.body = id + 'hi, egg' + name;
  }
  async index() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { name } = this.ctx.query;
    ctx.body = id + 'hi, egg' + name;
  }
}

module.exports = UserController;
