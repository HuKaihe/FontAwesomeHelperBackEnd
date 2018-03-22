'use strict';
module.exports = username => `<style>
    .fontawesome-mail {
        font-weight: 100!important;
    }
    .fontawesome-mail a {
        text-decoration: none;
        color: #8fbcce;
    }
</style>
<div class="fontawesome-mail">
    <p>Hey ${username}，我是阿里巴巴的恩言：</p>
    <div>
        <p>欢迎使用Fontawesome助手。</p>
        <p>
            <a href="http://fontawesome.dashgame.com/" target="_black">Fontawesome</a>
            是当今世界上最流行的字体图标库之一，它"多元"，"兼容"，"自由"，"高分屏完美呈现"的特性，简直让人欲罢不能！
        </p>
        <p>
            美中不足的是，海量的优质图标，给我们的记忆带来了很大的挑战。
            相信你一定常常为忘记了某个"印象中的"图标的名字或者找不到自己心仪的图标而苦恼。Fontawesome助手正是为解决这个问题诞生的！
        </p>
        <p>
            Fontawesome助手是一个开源免费的Fontawesome图标管理工具，它能够帮助您方便快捷的查找、管理和分享您的图标。
            相信它简约大方的交互风格能够使您轻松上手。
        </p>
        <p>
            您也可以查看
            <a href="https://hukaihe.gitbooks.io/fontawesome/content/" target="_blank">
                Fontawesome Helper使用手册
            </a>
            以获得更多帮助
        </p>
    </div>
    <p>
        您可以将您对此平台的宝贵意见
        <a href="https://github.com/HuKaihe/FontAwesomeHelper/issues/new" target="_blank">以Issue的形式提给我</a>
    </p>
    <p>
        祝您使用<a href="http://fontawesome.hukaihe.com">FontAwesome Helper</a>的旅途愉快
    </p>
</div>`;
