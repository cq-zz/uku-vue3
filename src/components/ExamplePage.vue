<script setup>
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const baseUrl = import.meta.env.VITE_APP_URL + "example/";

const iframeUrl = ref("dashboard");

watchEffect(() => {
  if (route.path.indexOf("component") > -1) {
    iframeUrl.value = "components/" + route.path.substring(route.path.lastIndexOf("/") + 1);
  } else {
    iframeUrl.value = "dashboard";
  }
});
</script>

<template>
  <div class="example-container-div">
    <iframe :src="baseUrl + iframeUrl" />
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

  > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
