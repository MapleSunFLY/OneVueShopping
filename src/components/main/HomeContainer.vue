<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in adList" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/1.jpg" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/2.jpg" alt="">
                <div class="mui-media-body">图片分享</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/3.jpg" alt="">
                <div class="mui-media-body">商品购买</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/4.jpg" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/5.jpg" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/6.jpg" alt="">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "Home.vue",
        data() {
            return {
                adList: [],
            }
        },
        created() {
            this.getAdList();
        },
        methods: {
            //地址 http://vue.studyit.io/api/getlunbo
            getAdList() {
                this.$http.get('http://apis.juhe.cn/simpleWeather/query?city=&key=cb965e30b7bde3862929a1512247364b').then(result => {
                    this.adList = [{url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2918628923,1290268264&fm=26&gp=0.jpg"},
                        {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2577576757,3841266884&fm=26&gp=0.jpg'},
                        {url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3998240009,2089027364&fm=26&gp=0.jpg'}];
                    Toast('加载成功了')
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 500px;

        /*后代选择器*/
        .mint-swipe-item {
            /*前面加 & 表示为交集选择器*/
            &:nth-child(1) {
                background-color: #f0ad4e;
            }

            &:nth-child(2) {
                background-color: #8f8f94;
            }

            &:nth-child(3) {
                background-color: cadetblue;
            }

            img {
                width: 100%;
                height: 100%;
            }

        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;

        li img {
            width: 100px;
            height: 100px;
        }

        mui-media-body {
            font-size: 14px;
        }
    }
</style>