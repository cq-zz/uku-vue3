import UkuButton from './Button';

const components = [
    UkuButton
]

const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
}

if (typeof window !== undefined && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}