import UkuCheckBox from "./CheckBox.vue";

// 为组件提供 install 安装方法，供按需引入
UkuCheckBox.install = function (Vue) {
  Vue.component(UkuCheckBox.name, UkuCheckBox);
};

export default UkuCheckBox;
