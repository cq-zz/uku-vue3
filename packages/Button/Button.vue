<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "UkuButton",
  props: {
    // 类型 primary success warn error
    type: {
      type: String,
      default: "",
    },
    // 大小 small normal large
    size: {
      type: String,
      default: "normal",
    },
    // 无背景色
    plain: {
      type: Boolean,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 自定义颜色
    color: {
      type: String,
      default: "",
    },
    // 块级
    block: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleUkuBtn = computed(() => {
      let style = {};
      if (props.color) {
        if (props.plain) {
          style = {
            color: props.color,
            borderColor: props.color,
          };
        } else {
          style = {
            backgroundColor: props.color,
            color: "#fff",
            border: "none",
          };
        }
      }
      return style;
    });

    return {
      styleUkuBtn,
    };
  },
});
</script>

<template>
  <button
    class="uku-btn"
    :disabled="disabled"
    :class="[
      'uku' + (type ? '-' + type : '') + (plain ? '-plain' : '') + '-btn',
      'uku-' + size + '-btn',
      { 'uku-disabled-btn': disabled },
    ]"
    :style="[styleUkuBtn, { width: block ? '100%' : 'auto' }]"
    @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
@import "../styles/var.less";

@uku-btn-primary-color: @blue;
@uku-btn-success-color: @green;
@uku-btn-warn-color: @orange;
@uku-btn-error-color: @red;

@uku-btn-default-font-color: @gray-8;
@uku-btn-white-font-color: @white;

@uku-btn-sm-font-size: @font-size-sm;
@uku-btn-md-font-size: @font-size-md;
@uku-btn-lg-font-size: @font-size-lg;

@uku-btn-sm-padding: @padding-sm;
@uku-btn-md-padding: @padding-md;
@uku-btn-lg-padding: @padding-lg;

@uku-btn-border: @gray-4;

.uku-btn {
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid @uku-btn-border;
  border-radius: 2px;
  font-size: @uku-btn-md-font-size;
  color: @uku-btn-default-font-color;
  cursor: pointer;
}

.uku-primary-btn {
  background-color: @uku-btn-primary-color;
  color: @uku-btn-white-font-color;
  border: 0;
}

.uku-success-btn {
  background-color: @uku-btn-success-color;
  color: @uku-btn-white-font-color;
  border: 0;
}

.uku-warn-btn {
  background-color: @uku-btn-warn-color;
  color: @uku-btn-white-font-color;
  border: 0;
}

.uku-error-btn {
  background-color: @uku-btn-error-color;
  color: @uku-btn-white-font-color;
  border: 0;
}

.uku-primary-plain-btn {
  border: 1px solid @uku-btn-primary-color;
  color: @uku-btn-primary-color;
}

.uku-success-plain-btn {
  border: 1px solid @uku-btn-success-color;
  color: @uku-btn-success-color;
}

.uku-warn-plain-btn {
  border: 1px solid @uku-btn-warn-color;
  color: @uku-btn-warn-color;
}

.uku-error-plain-btn {
  border: 1px solid @uku-btn-error-color;
  color: @uku-btn-error-color;
}

.uku-small-btn {
  padding: @uku-btn-sm-padding;
  font-size: @uku-btn-sm-font-size;
}

.uku-normal-btn {
  padding: @uku-btn-md-padding;
  font-size: @uku-btn-md-font-size;
}

.uku-large-btn {
  padding: @uku-btn-lg-padding;
  font-size: @uku-btn-lg-font-size;
}

.uku-disabled-btn {
  opacity: 0.5;
  cursor: no-drop;
}
</style>
