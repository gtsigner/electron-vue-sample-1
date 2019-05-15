<template>
    <div class="main-page">
        <div class="content-main">
            <img class="img-index index-1" src="../../assets/imgs/index_1.jpg" alt="">
            <img class="img-index index-2" src="../../assets/imgs/index_2.jpg" alt="">
            <img class="img-index index-3" src="../../assets/imgs/index_3.jpg" alt="">
            <div class="content-box">
                <el-row class="row-list" :gutter="3">
                    <el-col :span="1" class="ck-item">
                        <div class="grid-content bg-purple" @click="redTo({name:'home-py'})">
                            <img src="../../assets/imgs/icon_1.png" alt="">
                            <p>汉字字源</p>
                        </div>
                    </el-col>
                    <el-col :span="1" class="ck-item">
                        <div class="grid-content bg-purple" @click="redTo({name:'home-star'})">
                            <img src="../../assets/imgs/icon_3.png" alt="">
                            <p>国学经典</p>
                        </div>
                    </el-col>
                    <el-col :span="1" class="ck-item">
                        <div class="grid-content bg-purple">
                            <img src="../../assets/imgs/icon_2.png" alt="">
                            <p>文言名篇</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="row-list" :gutter="3">
                    <el-col :span="1" class="ck-item">
                        <div class="grid-content bg-purple">
                            <img src="../../assets/imgs/icon_1.png" alt="">
                            <p>唐诗宋词</p>
                        </div>
                    </el-col>
                    <el-col :span="1" class="ck-item">
                        <div class="grid-content bg-purple">
                            <img src="../../assets/imgs/icon_4.png" alt="">
                            <p>经典名篇</p>
                        </div>
                    </el-col>
                    <el-col :span="1" class="ck-item">
                        <div class="grid-content bg-purple">
                            <img src="../../assets/imgs/icon_6.png" alt="">
                            <p>中华文化</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import {Row, Col} from 'element-ui'

    export default {
        name: "index",
        components: {
            Row, Col
        },
        methods: {
            redTo(route) {
                return this.$router.push({name: route.name});
            }
        }
    }
</script>

<style scoped lang="scss">
    $color: #8F847E;
    $color-hover: #dccec4;
    $icon-color: #4A4945;
    $bg-color: #262425;
    $border-color-tran: rgba(74, 73, 69, 0.65);
    $logo-width: 80px;
    $wp-width: 160px;
    .content-main {
        position: relative;
        overflow: hidden;

        .row-list {
            margin-bottom: 40px;
        }

        .ck-item {
            border-radius: 50%;
            text-align: center;
            background: $bg-color;
            height: $wp-width;
            width: $wp-width;
            margin-right: 60px;

            .grid-content {
                height: 140px;
                width: 140px;
                top: 0;
                bottom: 0;
                margin: 25px auto auto;
                cursor: pointer;

                &:hover img, &:active img {
                    transform: scale(1.3);
                    transition: .288s all;
                }

                img {
                    height: $logo-width;
                    width: $logo-width;
                }

                p {
                    margin: 0 !important;
                    color: $color;
                }
            }
        }

    }

    .main-page {
        display: block;
        height: 100vh;
        flex-direction: column;
        background: #1F1F21;
    }

    .content-main {
        position: relative;
        overflow: hidden;
        flex: 1;
        height: 100%;
        width: 100%;

        .content-box {
            margin-top: 15%;
            margin-left: 10%;
        }
    }

    .img-index {
        position: absolute;

        &.index-1 {
            left: 20px;
            top: 10px;
            height: 100px;
        }

        &.index-2 {
            top: 20%;
            right: 30px;
            width: 350px;
            height: 60%;
        }

        &.index-3 {
            left: 20px;
            bottom: 20px;
        }
    }
</style>
