<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h3>home</h3>
    </div>
</template>

<script>
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
            //地址 http://vue.studyit.io /api/getlunbo
            getAdList() {
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                    if (result.body.status === 0) {
                        console.log('bbbbb')
                    } else {
                        console.log('aaaaaa')
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

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
        }
    }
</style>