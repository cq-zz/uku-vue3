<script setup>
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const componentName = ref("");

watchEffect(() => {
  componentName.value = route.path.substring(route.path.lastIndexOf("/") + 1);
});
</script>
<template>
  <div class="example-header-div">
    <router-link to>
      <img src="./images/back.png" alt="返回" class="uku-back-img" @click="$router.back(-1)" />
    </router-link>
    <b class="component-name-b">{{ componentName }}</b>
  </div>
  <div class="example-container-div">
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
.example-header-div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  .uku-back-img {
    position: absolute;
    left: 0;
    top: 5px;
    height: 30px;
  }

  .component-name-b {
    font-size: 20px;
    color: #000;
  }
}

.example-container-div {
  margin-top: 10px;
}
</style>
