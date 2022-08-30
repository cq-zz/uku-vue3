<script>
import { ref } from "vue";

export default {
  setup() {
    const text = ref("未选中");
    const checked = ref(false);

    const inputCheck = event => {
      checked.value = event.target.checked;
      text.value = event.target.checked ? "选中" : "未选中";
    };

    return {
      text,
      checked,
      inputCheck,
    };
  },
};
</script>
<template>
  <div class="block-checkbox-div">
    <p>默认用法</p>
    <div>
      <uku-checkbox></uku-checkbox>
    </div>
  </div>
  <div class="block-checkbox-div">
    <p>点击触发事件</p>
    <div>
      <uku-checkbox :checked="checked" @change="inputCheck"></uku-checkbox>
      <div>{{ text }}</div>
    </div>
  </div>
  <div class="block-checkbox-div">
    <p>禁用选项</p>
    <div>
      <uku-checkbox :disabled="true"></uku-checkbox>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block-checkbox-div {
  margin-top: 30px;
  > p {
    margin: 0;
    padding: 0;
    color: #646566;
  }

  > div {
    display: flex;
    align-items: center;
    margin: 10px 20px 0 0;

    > div {
      margin-right: 20px;
    }
  }
}
</style>
