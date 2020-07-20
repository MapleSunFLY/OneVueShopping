<template>
    <div class="appContainer">
        <!--顶部区域-->
        <mt-header fixed title="第一个商城项目">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <!--中间路由组件-->
        <router-view></router-view>

        <!--底部导航栏-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">1</span></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
    </div>
</template>


<script>
</script>

<style lang="scss" scoped>
    .appContainer {
        padding-top: 40px;
    }
</style>