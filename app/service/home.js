'use strict';

const Service = require('egg').Service;
const getMailContent = require('./mail');

class HomeService extends Service {

  async login(username, password) {
    const user = await this.app.mysql.get('home', { username, password });
    return user || {};
  }

  async signup(username, password, email, schemastr) {
    const mysql = this.app.mysql;
    const isUsernameRepeated = !!(await mysql.get('home', { username }));
    if (isUsernameRepeated) {
      return {
        code: 400,
        message: 'username repeat',
        data: null,
      };
    }
    const result = await mysql.insert('home', { username, password, email, schemastr });
    const id = (await mysql.query('select max(id) as id from home'))[0].id;
    this.ctx.helper.sendMail(email, '欢迎使用Fontawesome助手', getMailContent(username));
    return {
      code: result.affectedRows === 1 ? 200 : 500,
      message: result.affectedRows === 1 ? 'success' : 'data insert failed',
      data: {
        id,
        username,
      },
    };
  }

  async asyncData(id, schemastr) {
    const result = await this.app.mysql.update('home', { id, schemastr }); // 更新 posts 表中的记录
    // 判断更新成功
    return result.affectedRows === 1;
  }

  async getUser(id) {
    return (await this.app.mysql.get('home', { id }));
  }
}

module.exports = HomeService;
