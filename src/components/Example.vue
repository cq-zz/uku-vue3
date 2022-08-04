<script>
export default {
    setup() {
        
    },
}
</script>

<template>
    <div class="example-container-div">
        <iframe src="http://127.0.0.1:8080/#/example/button" />
    </div>
</template>

<style lang="less" scoped>
.example-container-div {
    position: fixed;
    top: 80px;
    width: 375px;
    height: 667px;

    > iframe {
        width: 100%;
        height: 100%;
    }
}
</style>