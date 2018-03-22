'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {

  // 为后面引入同构方案做铺垫
  async index() {
    if (!this.app.visitAmount) {
      await this.service.home.getVisitAmount();
    }
    const visitAmount = ++this.app.visitAmount;
    const ctx = this.ctx;
    const { id } = ctx.session.user || {};
    const user = await this.service.home.getUser(id);
    const { username = '', schemastr = '' } = user || {};
    const myData = { id, username, schemastr };
    await ctx.render('index.hbs', {
      visitAmount,
      myData: JSON.stringify(myData),
    });
  }


  async login() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    const user = await this.service.home.login(username, password);
    const { id, schemastr } = user || {};
    ctx.session.user = { id };
    ctx.body = {
      data: {
        id,
        schemastr,
        username,
      },
      message: 'success',
    };
  }

  async signup() {
    const ctx = this.ctx;
    const { username, password, email, schemastr } = ctx.request.body;
    const resultObj = await this.service.home.signup(username, password, email, schemastr);
    const { code, message, data } = resultObj;
    if (code === 200) {
      ctx.session.user = { id: data.id };
    }
    ctx.body = {
      code,
      data,
      message,
    };
  }

  async asyncData() {
    const ctx = this.ctx;
    const { id, schemastr } = ctx.request.body;
    this.service.home.asyncData(id, schemastr);
    ctx.body = {
      data: 200,
      message: 'success',
    };
  }

  async logout() {
    const ctx = this.ctx;
    ctx.session.user = null;
    ctx.body = {
      code: 200,
      message: 'success',
    };
  }
}

module.exports = HomeController;
