//入口文件
import Vue from 'vue'

//导入 vue-router 路由
import VueRouter from 'vue-router'
//安装 vue-router 路由
Vue.use(VueRouter);

//导入 vue-resource 网络请求
import VueResource from 'vue-resource'
//安装 vue-resource 网络请求
Vue.use(VueResource);


//按需导入 Mint-UI 组件
import {Header, Swipe, SwipeItem} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入路由模块
import router from './router.js'

//导入 Mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入 app 根主键
import app from './App.vue'

new Vue({
    el: '#app',
    render: c => c(app),
    router,
});