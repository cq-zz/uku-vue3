import UkuButton from './Button.vue';

// 为组件提供 install 安装方法，供按需引入
UkuButton.install = function (Vue) {
  Vue.component(UkuButton.name, UkuButton)
}

export default UkuButton;
