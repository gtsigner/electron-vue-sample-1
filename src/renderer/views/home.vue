<template>
    <div class="action-bar">
        <top-bar></top-bar>
        <div class="layout-main">
            <div class="left-menu">
                <div class="left-main-menu">
                    <div class="menu-wrapper">
                        <div class="menu-item" @click="redTo({name:'home-star'})">
                            <img class="icon" src="../assets/imgs/icon_1.png" alt="">
                            <span class="title">汉字资源</span>
                        </div>
                        <div class="menu-item" @click="redTo({name:'home-py'})">
                            <img class="icon" src="../assets/imgs/icon_2.png" alt="">
                            <span class="title">宋词唐诗</span>
                        </div>
                        <div class="menu-item" @click="redTo({name:'home-main'})">
                            <img class="icon" src="../assets/imgs/icon_3.png" alt="">
                            <span class="title">国学经典</span>
                        </div>
                        <div class="menu-item">
                            <img class="icon" src="../assets/imgs/icon_4.png" alt="">
                            <span class="title">中华文化</span>
                        </div>
                    </div>
                </div>
                <div class="left-list">
                    <div class="menu-list">
                        <div class="menu-item" v-for="(it,i) in cate" :key="i">
                            <p>{{it.title}}</p>
                        </div>
                    </div>
                    <div class="menu-footer">
                        <div class="menu-item">
                            <i class="icon el-icon-alarm-clock"></i>
                            <p>学习历史</p>
                        </div>
                        <div class="menu-item">
                            <i class="icon el-icon-star-on"></i>
                            <p>收藏夹</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<!--基本左侧央视-->
<style scoped lang="scss">
    $color: #8F847E;
    $icon-color: #4A4945;
    $logo-width: 200px;
    .action-bar {
        overflow: hidden;
        display: flex;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
    }

    .layout-main {
        display: flex;
        /*height: 100%;*/
        height: 100%;
        flex: 1;
        width: 100%;

        .left-menu {
            width: $logo-width;
            border-right: 1px solid $icon-color;
        }
    }

    .left-menu {
        display: flex;

        .left-main-menu {
            width: 70px;
            background-color: #383838;
            height: 100%;
            text-align: center;
            position: relative;
            display: flex;
            align-items: center; /*定义body的元素垂直居中*/
            justify-content: center; /*定义body的里的元素水平居中*/

            .menu-item {
                text-align: center;
                display: flex;
                margin-bottom: 30px;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;

                &:hover .icon {
                    transition: .2s all;
                    transform: scale(1.2);
                }

                .icon {
                    width: 50px;
                    margin: 0 auto;
                    height: 50px;
                }

                .title {
                    color: $color;
                    font-size: 12px;
                    margin-top: 5px;
                }
            }
        }

        .left-list {
            flex: 1;
            width: auto;
            background: #242424;
            position: relative;

            .menu-list {
                padding-top: 50px;

                .menu-item {
                    cursor: pointer;
                    margin-top: 25px;

                    &:hover {
                        background: #383838;
                    }

                    P {
                        color: $color;
                        line-height: 30px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }

            .menu-footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                color: #fff;
                font-size: 12px;
                display: flex;
                border-top: 1px solid $icon-color;

                .menu-item {
                    flex: 1;
                    padding: 5px;
                    cursor: pointer;

                    &:first-child {
                        border-right: 1px solid $icon-color;
                    }

                    .icon {
                        text-align: center;
                        display: block;
                        font-size: 25px;
                        color: $icon-color;
                    }

                    p {
                        text-align: center;
                        color: $color;
                        margin-top: 5px !important;
                        margin-bottom: 0 !important;
                    }
                }
            }
        }
    }

    .right-content {
        flex: 1;
        position: relative;
    }
</style>


<script>
    import TopBar from "../components/TopBar";

    export default {
        name: "home",
        components: {TopBar},
        data() {
            return {
                cate: [
                    {title: "拼音学习", icon: ''},
                    {title: "汉字常识", icon: ''},
                    {title: "基本资源", icon: ''},
                    {title: "字源专讲", icon: ''},
                    {title: "爆破汉字", icon: ''},
                    {title: "资源字典", icon: '',},
                ],
            }
        },
        methods: {
            redTo(route) {
                return this.$router.push({name: route.name});
            }
        }
    }
</script>

