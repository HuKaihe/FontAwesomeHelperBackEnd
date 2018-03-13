请在同级目录新建.config.js配置文件，并补充以下信息：

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