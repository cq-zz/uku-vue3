<script>
import { ref } from "vue";

export default {
  setup() {
    const data1 = ref([
      { id: 1, name: "test1", value: 1 },
      { id: 2, name: "test1", value: 2 },
      { id: 3, name: "test1", value: 3 },
    ]);
    const data2 = ref([
      { id: 10, name: "test", value: "是", label: "是", checked: true },
      { id: 12, name: "test", value: "否", label: "否", checked: false },
    ]);
    const data3 = ref([
      { id: 11, name: "test2", value: "足球" },
      { id: 22, name: "test2", value: "篮球", checked: false },
      { id: 33, name: "test2", value: "羽毛球", checked: false },
      { id: 44, name: "test2", value: "乒乓球", disabled: true, checked: false },
      { id: 55, name: "test2", value: "排球", checked: true },
    ]);

    const checkboxgroupChange = (data, item, index, event) => {
      console.log(event.target.checked, data, item, index);
    };

    return {
      data1,
      data2,
      data3,
      checkboxgroupChange,
    };
  },
};
</script>
<template>
  <div class="block-checkboxgroup-div">
    <p>默认用法</p>
    <div>
      <uku-checkbox-group :data="data1"></uku-checkbox-group>
    </div>
  </div>
  <div class="block-checkboxgroup-div">
    <p>回调事件</p>
    <div>
      <uku-checkbox-group :data="data2" @change="checkboxgroupChange"></uku-checkbox-group>
    </div>
  </div>
  <div class="block-checkboxgroup-div">
    <p>禁用选项</p>
    <div>
      <uku-checkbox-group :inline="true" :data="data3"></uku-checkbox-group>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block-checkboxgroup-div {
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
