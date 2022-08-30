/* eslint-disable valid-typeof */
import UkuButton from "./Button";
import UkuImage from "./Image";
import UkuCheckBox from "./CheckBox";
import UkuCheckBoxGroup from "./CheckBoxGroup";

const components = [UkuButton, UkuImage, UkuCheckBox, UkuCheckBoxGroup];

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
