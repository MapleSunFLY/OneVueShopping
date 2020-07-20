//入口文件
import Vue from 'vue'

//按需导入 Mint-UI 组件
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);

//导入 Mui
import './lib/mui/css/mui.min.css'
import './lib/mui/js/mui.min.js'

//导入 app 根主键
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
});