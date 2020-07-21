<template>
    <div class="appContainer">
        <!--顶部区域-->
        <mt-header fixed title="第一个商城项目"/>

        <!--中间路由组件-->
        <router-view/>

        <!--底部导航栏-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"/>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"/>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"/>
                <span class="mui-tab-label">搜索</span>
            </router-link>
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