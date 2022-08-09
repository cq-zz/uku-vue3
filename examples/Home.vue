<script>
export default {
  setup() {},
};
</script>
<template>
  <div class="introdude-div">
    <img src="./images/uku.png" alt="logo" />
    <span>Unknown UI</span>
    <p>适用于vue3</p>
  </div>
  <div class="components-menu-div">
    <router-link to="components/button">
      <span>Button 按钮</span>
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

.example-header-div {
  height: 40px;

  > a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
  }
}
</style>
