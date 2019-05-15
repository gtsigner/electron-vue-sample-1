<template>
    <div class="top-bar">
        <div class="logo">
            <!--<img class="logo-img" src="../assets/imgs/logo.png" alt="">-->
            LOGO 儒易通
        </div>
        <div class="right-bar">
            <div class="title">
                国文能力提升系统-汉字字源-拼音学习
            </div>
            <div class="search-user user-info-box">
                <el-input class="search-input" v-model="input" placeholder="搜索"></el-input>
                <div class="notice-bar">
                    <i class="el-icon-bell"></i>
                </div>
                <el-dropdown hide-on-click>
                    <el-button class="avatar-drop-btn" type="primary">
                        <img src="../assets/imgs/avatar.png" class="avatar " :alt="user.nickname"/>
                        <span class="nickname">{{user.nickname}}</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        data() {
            return {
                input: '',
                user: {
                    avatar: '',
                    username: '',
                    nickname: '牛大哥文学',
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $color: #8F847E;
    $logo-width: 200px;
    $icon-color: #4A4945;

    .top-bar {
        height: 60px;
        display: flex;

        .logo {
            width: $logo-width;
            text-align: center;
            font-size: 26px;
            border-right: 1px solid $icon-color;
        }

        .right-bar {
            flex: 1;
            padding: 5px 15px;
            line-height: 50px;
            color: $color;
        }

        .logo {
            padding: 5px 0;
            line-height: 50px;
            color: $color;
            box-sizing: border-box;

            .logo-img {
                height: 50px;
                width: auto;
            }
        }

        border-bottom: .3px solid $icon-color;

        .right-bar {
            display: flex;
            justify-content: space-between;
        }

        .user-info-box {
            display: flex;
        }
    }
</style>

<style lang="scss">
    $color: #756b67;
    $tx-color: #8F847E;
    .notice-bar {
        margin-left: 20px;
        padding: 0 8px;
        cursor: pointer;
    }

    .avatar-drop-btn {
        background: transparent !important;
        border: 0 !important;
        color: $tx-color;
        padding: 0 10px !important;
        margin-top: 10px !important;

        .nickname {
            margin: 0 12px;
            color: $tx-color;
        }

        & > span {
            display: flex;
            justify-content: space-between;
        }

        .avatar {
            height: 30px;
            width: 30px;
            border-radius: 50%;
        }

        .el-icon--right, span {
            color: $tx-color;
            font-size: 13px;
            line-height: 30px;
        }
    }

    .search-user .el-input__inner {
        background: transparent !important;
        border-radius: 15px;
        width: 180px;
        border: 1px solid $color;
        line-height: 30px;
        height: 30px;
        margin-top: 2.5px;
        color: $color;

        &:hover, &:focus {
            border: 1px solid $color;
        }

        &::placeholder {
            color: #5e5150;
        }
    }
</style>
