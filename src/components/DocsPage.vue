<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

window.goRouter = function (obj) {
  if (obj.indexOf("components") > -1) {
    const url = "/docs/components/" + obj.substring(obj.lastIndexOf("/") + 1);
    router.push({ path: url });
  } else {
    router.back(-1);
  }
};
</script>

<template>
  <router-view></router-view>
</template>
