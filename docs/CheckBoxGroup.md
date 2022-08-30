# CheckBoxGroup 复选框组

### 介绍

在一组备选项中进行多选。

### 引入

```javascript
import { createApp } from 'vue';
import { UkuCheckboxgroup } from 'uku-vue3';

const app = createApp();
app.use(UkuCheckboxgroup);
```

## 代码演示

### 默认用法

```html
<uku-checkboxgroup :data="data1"></uku-checkboxgroup>
```
```javascript
import { ref } from "vue";

export default {
  setup() {
    const data1 = ref([
      { id: 1, name: "test1", value: 1 },
      { id: 2, name: "test1", value: 2 },
      { id: 3, name: "test1", value: 3 },
    ]);

    return {
      data1,
    };
  },
};
```

### 回调事件

通过 `change` 。

```html
<uku-checkboxgroup :data="data2" @change="checkboxgroupChange"></uku-checkboxgroup>
```
```javascript
import { ref } from "vue";

export default {
  setup() {
    const data2 = ref([
      { id: 10, name: "test", value: "是", label: "是", checked: true },
      { id: 12, name: "test", value: "否", label: "否", checked: false },
    ]);

    const checkboxgroupChange = (data, item, index, event) => {
      console.log(event.target.checked, data, item, index);
    };

    return {
      data2,
      checkboxgroupChange,
    };
  },
};
```

### 禁用

通过 `disabled` 属性将按钮设置为禁用状态

```html
<uku-checkboxgroup :inline="true" :data="data3"></uku-checkboxgroup>
```
```javascript
import { ref } from "vue";

export default {
  setup() {
    const data3 = ref([
      { id: 11, name: "test2", value: "足球" },
      { id: 22, name: "test2", value: "篮球", checked: false },
      { id: 33, name: "test2", value: "羽毛球", checked: false },
      { id: 44, name: "test2", value: "乒乓球", disabled: true, checked: false },
      { id: 55, name: "test2", value: "排球", checked: true },
    ]);

    return {
      data3,
    };
  },
};
```

## API

### Props

| 参数 | 说明 |  类型 |  默认值  |  
| ---- |  ----   |  ------ |  -------  | 
| data | 复选数据 |  _array_  |  [] |
| inline | 是否水平排列 `false` `true` |  _boolean_ | false |


### Events

| 事件名 |  说明 | 回调参数 |
| --- | --- | --- |
| change | 选择时触发回调函数 | event: MouseEvent |

