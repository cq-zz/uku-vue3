<template>
  <div class="uku-checkboxgroup">
    <div
      class="uku-checkbox-item"
      :style="{ display: inline ? 'inline-block' : 'block' }"
      v-for="(checkbox, index) in data"
      :key="checkbox.id">
      <uku-checkbox
        :name="checkbox.name"
        :class="{ choose: checkbox.checked }"
        :value="checkbox.value"
        :id="checkbox.id"
        v-model:checked="checkbox.checked"
        :disabled="checkbox.disabled"
        @change="$emit('change', data, checkbox, index, $event)"></uku-checkbox>
      <label :for="checkbox.id">{{ checkbox.label || checkbox.value }}</label>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "UkuCheckboxGroup",
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style lang="less" scoped>
.uku-checkboxgroup {
  .uku-checkbox-item {
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    .uku-checkbox,
    label {
      display: inline-block;
      margin: 0;
      vertical-align: middle;
    }
    label {
      padding-left: 5px;
    }
  }
}
</style>
