<script setup>
import '../styles/common.less';

import HeaderContent from '../components/HeaderContent.vue';

</script>

<template>
    <div class="main-layout-div">
        <div class="header-div">
            <header-content></header-content>
        </div>
        <div class="content-container-div">
            <div class="slide-div">
                <slot name="slider"></slot>
            </div>
            <div class="container-div">
                <slot name="docs"></slot>
            </div>
            <div class="example-div">
                <slot name="example"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>

.main-layout-div {
    width: 100%;
    height: 100%;
    background-color: #f7f8fa;

    .header-div {
        width: 100%;
        height: 60px;
        background-color: #001938;
    }

    .content-container-div {
        display: flex;
        width: 90%;
        height: calc(100% - 60px);
        margin: 0 auto;

        >div {

            /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
            &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
                background-color: #F5F5F5;
                display: none;
            }

            /*定义滚动条轨道 内阴影 圆角*/
            &::-webkit-scrollbar-track {
                border-radius: 5px;
                background-color: #F5F5F5;
            }

            /*定义滑块 内阴影 圆角*/
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: rgba(0, 0, 0, .1);
            }
        }

        .slide-div {
            width: 220px;
            height: 100%;
            padding: 20px 10px;
            background-color: #fff;
            box-shadow: 0 8px 12px #ebedf0;
            box-sizing: border-box;
            overflow: auto;
            
            &:hover {
                &::-webkit-scrollbar {
                    display: block;
                }
            }
        }

        .container-div {
            flex: 1;
            margin: 0 30px;
            padding: 24px 0;
            overflow: auto;
        }

        .example-div {
            width: 375px;
            height: auto;
            background-color: transparent;
        }
    }
}
</style>