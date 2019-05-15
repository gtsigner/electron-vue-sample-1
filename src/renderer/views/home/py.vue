<template>
    <div class="page-wrapper">
        <div class="speed-box">
            <div class="speed-head">
                <div class="sp-item">正文</div>
                <div class="sp-item">译文</div>
                <div class="sp-item">背诵</div>
                <div class="sp-item">作品概况</div>
                <div class="sp-item">作者简介</div>
                <div class="sp-item sp-star">收藏</div>
            </div>
            <div class="speed-content">

                <div class="title">百家姓</div>
                <div class="card-content thin-scroll">
                    asdfasdfasdfa
                    asdfa
                    sdf
                    asdf
                    asd
                    fa
                    sdf
                    a
                    sdf
                    as
                </div>

                <div class="footer-btn">
                    <div class="footer-btn-item">
                        <div class="f-ic icon-ld"></div>
                        <p>朗读</p>
                    </div>
                    <div class="footer-btn-item">
                        <div class="f-ic icon-gd"></div>
                        <p>跟读</p>
                    </div>
                    <div class="footer-btn-item">
                        <div class="f-ic icon-ly"></div>
                        <p>录音</p>
                    </div>
                    <div class="footer-btn-item">
                        <div class="f-ic icon-save"></div>
                        <p>保存音频</p>
                    </div>
                    <div class="footer-btn-item">
                        <div class="f-ic icon-dy"></div>
                        <p>打印</p>
                    </div>
                </div>

                <div class="back-btn" @click="redBack">返回</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "py",
        methods: {
            redBack() {
                this.$router.back();
            }
        }
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
            position: relative;
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
                padding: 15px 20px 20px;

                .title {
                    text-align: center;
                    font-size: 30px;
                    line-height: 50px;
                    margin-bottom: 15px;
                    color: $color-hover;
                    letter-spacing: 10px;
                }

                .card-content {
                    color: $color;
                    border-top: 1px solid $border-color-tran;
                    border-bottom: 1px solid $border-color-tran;
                    padding: 30px 15px;
                    min-height: 300px;
                    overflow-y: scroll;
                }

                .footer-btn {
                    margin-top: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;

                    .footer-btn-item {
                        margin-right: 30px;
                        cursor: pointer;


                        p {
                            color: $color;
                            margin: 0 8px !important;
                            font-size: 13px;
                        }

                        .icon-save {
                            background: url("../../assets/imgs/icon_vv.png") no-repeat;
                        }

                        .icon-dy {
                            background: url("../../assets/imgs/icon_print.png") no-repeat;
                        }

                        .icon-ld {
                            background: url("../../assets/imgs/icon_hover.png") no-repeat;
                        }

                        .icon-ly {
                            background: url("../../assets/imgs/icon_speed.png") no-repeat;
                        }

                        .icon-gd {
                            background: url("../../assets/imgs/icon_voice.png") no-repeat;
                        }

                        .f-ic {
                            display: block;
                            text-align: center;
                            margin: 0 auto 5px;
                            height: 40px;
                            width: 40px;
                            transition: .2s all;
                            background-size: 100% 100%;
                        }

                        &:hover .f-ic, &:active .f-ic {
                            color: $color-hover;
                            background-size: 100% 100%;
                            background-image: url("../../assets/imgs/icon_hover.png");
                        }
                    }


                }

            }

            .back-btn {
                position: absolute;
                color: $color;
                right: 10px;
                bottom: 10px;
                cursor: pointer;
            }
        }

    }
</style>
