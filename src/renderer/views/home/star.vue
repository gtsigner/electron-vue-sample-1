<template>
    <div class="page-wrapper">
        <div class="speed-box">
            <div class="speed-head">
                <div class="sp-item">圣母婊</div>
                <span class="sp"></span>
                <div class="sp-item">云哥目标</div>
                <span class="sp"></span>
                <div class="sp-item">整体认读</div>
            </div>
            <div class="speed-content">
                <div class="char-item">b</div>
                <div class="char-item">p</div>
                <div class="char-item">m</div>
                <div class="char-item">f</div>
                <div class="char-item">d</div>
            </div>
        </div>
        <div class="tip-box">
            <table class="tip-table">
                <tbody>
                <tr>
                    <td class="text-center title">发音要领</td>
                    <td class="content tp-text">
                        发音是...asd.a.d
                    </td>
                </tr>
                <tr>
                    <td class="text-center title">拼 一 拼</td>
                    <td class="content">
                        <div class="pp-content">

                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="text-center title">读 一 读</td>
                    <td class="content">
                        <div class="read-content">
                            <div class="img-list">
                                <img src="../../assets/imgs/demo1.png" alt="">
                                <img src="../../assets/imgs/icon_speed.png" alt="">
                                <img src="../../assets/imgs/demo2.png" alt="">
                            </div>
                            <div class="speed-list">
                                <div class="list-item">
                                    <p>爸爸...asd.asdadasda 文字串</p>

                                </div>
                                <div class="list-item">
                                    <p>爸爸...asd.asdadasda 文字串</p>
                                </div>
                                <div class="list-item">
                                    <p>爸爸...asd.asdadasda 文字串</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "star"
    }
</script>
<!--左边页面-->
<style scoped lang="scss">
    $color: #8F847E;
    $color-hover: #dccec4;
    $icon-color: #4A4945;
    $bg-color: #262425;
    $border-color-tran: rgba(74, 73, 69, 0.65);
    $logo-width: 200px;
    .page-wrapper {
        display: block;
        padding: 30px;

        /*上方的Box*/
        .speed-box {
            background: $bg-color;
            width: 100%;
            margin-top: 30px;
            border: 1px solid $icon-color;

            .speed-head {
                display: flex;
                padding: 8px;
                box-sizing: border-box;
                border-bottom: 1px solid $border-color-tran;

                .sp-item {
                    margin: 0 14px;
                    color: $color;
                    box-sizing: border-box;
                    cursor: pointer;
                    border: 1px solid transparent;
                    padding: 2px;

                    &:hover, &.active {
                        border: 1px solid $icon-color;
                        background: #302C2A;
                        box-sizing: border-box;
                    }
                }

                .sp {
                    width: 1px;
                    height: 16px;
                    background: #302C2A;
                    margin-top: 8px;
                }
            }

            .speed-content {
                height: 60px;

                .char-item {
                    font-size: 30px;
                    margin-left: 20px;
                    line-height: 60px;
                    color: $color;
                    cursor: pointer;
                    float: left;

                    &:hover, &.active {
                        color: $color-hover;
                    }
                }
            }
        }

        /*下方的box*/
        .tip-box {
            margin-top: 20px;
            width: 100%;
            background: $bg-color;


            .tip-table {
                margin-top: 20px;
                width: 100%;
                border: 1px solid $icon-color;
                color: #fff;

                .text-center {
                    text-align: center;
                }

                tr {
                    line-height: 40px;

                    td {
                        border-right: 1px solid $border-color-tran;
                        border-bottom: 1px solid $border-color-tran;
                        padding: 8px;

                        &:last-child {
                            border-right: none;
                        }
                    }

                    &:last-child td {
                        border-bottom: none;
                    }
                }

                .title {
                    width: 130px;
                    line-height: 50px;
                    color: $color;
                }

                .tp-text {
                    line-height: 50px;
                    color: $color;
                }

                .content {
                    padding-left: 20px;
                }

                .read-content {
                    padding: 5px 0;
                    display: flex;

                    .img-list {
                        line-height: 0;
                        height: 150px;

                        img {
                            height: 150px;
                            width: 150px;
                            margin-right: 10px;
                        }
                    }

                    .speed-list {
                        height: 150px;
                        margin-left: 20px;
                        flex: 1;

                        .list-item {
                            p {
                                margin: 0 !important;
                                line-height: 50px;
                                color: $color;
                                border-bottom: 1px solid $border-color-tran;
                            }

                            &:last-child p {
                                border-bottom: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
