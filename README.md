# FontAwesomeHelperBackEnd

## config

请在config目录新建.config.js配置文件，并补充以下信息：

    module.exports = {
        //邮件配置
        email: {
            service: '',
            user: '', // 发送邮件的邮箱
            pass: '', // 发送邮件的验证码或密码
        },

        mysql: {
            // host
            host: '',
            // 端口号
            port: '',
            // 用户名
            user: '',
            // 密码
            password: '',
            // 数据库名
            database: '',
        }
    }

将home.sql文件导入mysql数据库中

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org