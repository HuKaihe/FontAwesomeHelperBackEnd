'use strict';

module.exports = {
  schedule: {
    interval: '0.1m', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    if (ctx.app.visitAmount) {
      await ctx.app.mysql.update('info', { id: 1, value: ctx.app.visitAmount.toString() });
    }
  },
};
