<script setup>
import { ref } from "vue";
import MenusPC from "../router/menus";

const Menus = ref(MenusPC);
const CurItem = ref("介绍");
</script>

<template>
  <div class="menu-container-div">
    <ul>
      <li v-for="(parentItem, parentIndex) in Menus" v-bind:key="'parent-menu-' + parentIndex">
        <span class="parent-menu-span">{{ parentItem.title }}</span>
        <ul v-if="parentItem?.children.length">
          <li
            v-for="(item, index) in parentItem?.children"
            v-bind:key="parentItem.title + 'menu-' + index"
            @click="CurItem = item.name"
            class="menu-li"
            :class="{ 'active-menu': CurItem === item.name }">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
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

    .menu-li {
      margin: 8px 0;
      padding: 8px 0 8px 24px;
      border-radius: 999px;
      cursor: pointer;

      > a {
        color: #455a64;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
      }

      &.active-menu {
        background-color: #ebfff0;

        > a {
          font-weight: 600;
          color: #4fc08d;
        }
      }
    }
  }
}
</style>
