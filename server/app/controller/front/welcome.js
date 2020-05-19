'use strict';

const Controller = require('egg').Controller;

class WelcomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const result = await app.mysql.get('blog_content', {});
    ctx.body = result;
  }
}

module.exports = WelcomeController;
