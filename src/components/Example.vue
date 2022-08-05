<script setup>

</script>

<template>
    <div class="example-container-div">
        <iframe src="http://127.0.0.1:8080/#/uku/example/dashboard" />
    </div>
</template>

<style lang="less" scoped>
.example-container-div {
    position: fixed;
    top: 84px;
    width: 375px;
    height: 667px;
    padding: 15px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 12px #ebedf0;

    >iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
}
</style>