<script>
export default {
    name: "UkuButton",
    props: {
        type: {
            type: String,
            default: "default",
        },
        size: {
            type: String,
            default: "normal",
        }
    }
}
</script>

<template>
    <button class="uku-btn">
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
    .uku-btn {
        background-color: #fff;
        border: 0;
        font-size: 1rem;
        color: #000;
    }
</style>