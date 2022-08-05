<script setup>

</script>

<template>
    <div class="header-container-div">
        <div class="logo-container">
            <img src="../assets/uku.png" alt="logo" />
            <b>Unknown UI <span>（适用于vue3）</span></b>
        </div>
        <a class="github-link-a" href="https://github.com/cq-zz/uku-vue3">
            <img src="../assets/github.svg" alt="github" />
        </a>
    </div>
</template>

<style lang="less" scoped>
.header-container-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    color: #fff;

    .logo-container {
        >img {
            height: 30px;
        }

        > b {
            margin-left: 10px;
            font-size: 22px;

            >span {
                color: #999;
                font-size: 14px;
            }
        }
    }

    .github-link-a {
        transition:  all .5s;

        &:hover {
            transform: scale(1.1);
        }
        > img {
            height: 30px;
        }
    }
}
</style>