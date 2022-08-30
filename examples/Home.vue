<script setup>
import { ref } from "vue";

const menus = ref([
  { cn: "按钮", en: "Button", path: "components/Button" },
  { cn: "图片", en: "Image", path: "components/Image" },
  { cn: "复选框", en: "CheckBox", path: "components/CheckBox" },
  { cn: "复选框组", en: "CheckBoxGroup", path: "components/CheckBoxGroup" },
]);

const goRoute = item => {
  window.parent.goRouter(item);
};
</script>
<template>
  <div class="introdude-div">
    <img src="./images/uku.png" alt="logo" />
    <span>Unknown UI</span>
    <p>适用于vue</p>
  </div>
  <div class="components-menu-div">
    <router-link
      v-for="(menu, index) in menus"
      :to="menu.path"
      v-bind:key="'menu-' + index"
      @click="goRoute(menu.path)">
      <span>{{ menu.en }} {{ menu.cn }}</span>
      <span> > </span>
    </router-link>
  </div>
</template>
<style lang="less" scoped>
.introdude-div {
  padding: 10px;

  > img {
    height: 40px;
  }

  > span {
    font-size: 24px;
    margin-left: 20px;
  }

  > p {
    display: block;
    margin: 0;
    padding: 10px 0;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}

.components-menu-div {
  > a {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 12px;
    padding: 0 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    text-decoration: none;
  }
}
</style>
