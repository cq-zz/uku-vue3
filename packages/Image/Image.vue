<script>
import { computed, defineComponent } from "vue";
import { addUnit, isDef } from "../utils";

export default defineComponent({
  name: "UkuImage",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    width: {
      type: String || Number,
      default: "",
    },
    height: {
      type: String || Number,
      default: "",
    },
    radius: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const styleUkuImg = computed(() => {
      const style = {
        width: addUnit(props.width),
        height: addUnit(props.height),
      };

      if (isDef(props.radius)) {
        style.overflow = "hidden";
        style.borderRadius = addUnit(props.radius);
      }

      return style;
    });

    return {
      styleUkuImg,
    };
  },
});
</script>

<template>
  <div class="uku-img" @click="$emit('click')" :style="{ width: styleUkuImg.width }">
    <img :src="src" :alt="alt" :style="styleUkuImg" />
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.uku-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
</style>
