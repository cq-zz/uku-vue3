<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <div class="main-layout-div">
        <div class="header-div">
            <header></header>
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

    .header-div {
        width: 100%;
        height: 60px;
        background-color: #001938;
    }

    .content-container-div {
        display: flex;
        width: 90%;
        margin: 0 auto;
        
        > div {
            box-shadow: 0 8px 12px #ebedf0;
        }

        .slide-div {
            width: 220px;
            height: 100%;
            background-color: #fff;
            overflow: auto;
        }

        .container-div {
            flex: 1;
            margin: 0 30px;
        }

        .example-div {
            width: 375px;
            height: auto;
            background-color: transparent;
        }
    }
}
</style>