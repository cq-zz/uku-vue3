<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import MenusPC from "../router/menus";

const route = useRoute();
const Menus = ref(MenusPC);
const CurPath = ref("");

watchEffect(() => {
  CurPath.value = route.path;
});
</script>

<template>
  <div class="menu-container-div">
    <ul>
      <li v-for="(parentItem, parentIndex) in Menus" v-bind:key="'parent-menu-' + parentIndex">
        <span class="parent-menu-span">{{ parentItem.title }}</span>
        <ul v-if="parentItem?.children.length">
          <router-link
            v-for="(item, index) in parentItem?.children"
            v-bind:key="parentItem.title + 'menu-' + index"
            :to="item.path">
            <li class="menu-li" :class="{ 'active-menu': CurPath === item.path }">
              {{ item.name }}
            </li>
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.menu-container-div {
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;

    .parent-menu-span {
      display: block;
      padding: 8px 0 8px 24px;
      color: #455a64;
      font-size: 15px;
      font-weight: 600;
      line-height: 28px;
    }

    > a {
      display: inline-block;
      height: 100%;
      width: 100%;
      color: #455a64;
      font-size: 14px;
      line-height: 20px;
      text-decoration: none;
    }

    .menu-li {
      margin: 8px 0;
      padding: 8px 0 8px 24px;
      border-radius: 999px;
      box-sizing: border-box;
      cursor: pointer;

      &.active-menu {
        font-weight: 600;
        color: #4fc08d;
        background-color: #ebfff0;
      }
    }
  }
}
</style>
