'use strict';

const Service = require('egg').Service;
const getMailContent = require('./mail');

class HomeService extends Service {

  async login(username, password) {
    const user = await this.app.mysql.get('home', { username, password });
    if (user) {
      await this.app.mysql.update('home', {
        id: user.id,
        last_login_time: this.app.mysql.literals.now,
        visit_times: ++user.visit_times,
      });
    }
    return user || {};
  }

  async getVisitAmount() {
    this.app.visitAmount = parseInt((await this.app.mysql.get('info', { id: 1 })).value);
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
    setTimeout(() => {
      this.ctx.helper.sendMail('agentKyle@foxmail.com', '有新的朋友注册fontawesomehelper了',
        `
        <p>Hey，恩言，给你介绍一位新朋友——${username}。他刚刚加入了我们，你可以通过${email}和他取得联系。</p>
        <p>恭喜你又为一个朋友的生活带来了一份便利</p>
        <p>敬礼，HKH小蜜</p>
        `
      );
    }, 3000);
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
    const result = await this.app.mysql.update('home', { id, schemastr });
    // 判断更新成功
    return result.affectedRows === 1;
  }

  async getUser(id) {
    return (await this.app.mysql.get('home', { id }));
  }
}

module.exports = HomeService;
