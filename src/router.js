import VueRouter from 'vue-router'
//导入组件
import HomeContainer from "./components/main/HomeContainer.vue"
import MemberContainer from "./components/main/MemberContainer.vue";
import ShopCarContainer from "./components/main/ShopcarContainer.vue";
import SearchContainer from "./components/main/SearchContainer.vue";

const router = new VueRouter({
    routes: [//配置路由规则
        {path: '/', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopCar', component: ShopCarContainer},
        {path: '/search', component: SearchContainer},
    ],
    linkActiveClass: 'mui-active',//覆盖默认的路由高亮显示类，默认为：router-link-active
});
//把路由对象暴露出去
export default router