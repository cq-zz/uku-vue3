import UkuCheckBoxGroup from "./CheckBoxGroup.vue";

// 为组件提供 install 安装方法，供按需引入
UkuCheckBoxGroup.install = function (Vue) {
  Vue.component(UkuCheckBoxGroup.name, UkuCheckBoxGroup);
};

export default UkuCheckBoxGroup;
