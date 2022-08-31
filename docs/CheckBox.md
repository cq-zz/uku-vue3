# CheckBox 复选框

### 介绍

在一组备选项中进行多选。

### 引入

```javascript
import { createApp } from 'vue';
import { Checkbox } from 'uku-vue3';

const app = createApp();
app.use(Checkbox);
```

## 代码演示

### 默认用法

```html
<uku-checkbox></uku-checkbox>
```

### 点击触发事件

通过 `change` 。

```html
<uku-checkbox :checked="checked" @change="inputCheck"></uku-checkbox>
```
```javascript
import { ref } from "vue";

export default {
  setup() {
    const text = ref("未选中");
    const checked = ref(false);

    const inputCheck = event => {
      checked.value = event.target.checked;
      text.value = event.target.checked ? "选中" : "未选中";
    };

    return {
      text,
      checked,
      inputCheck,
    };
  },
};
```

### 禁用

通过 `disabled` 属性将按钮设置为禁用状态

```html
<uku-checkbox :disabled="true"></uku-checkbox>
```

## API

### Props

| 参数 | 说明 |  类型 |  默认值  |  
| ---- |  ----   |  ------ |  -------  | 
| checked.sync | 是否选中 `false` `true` |  _boolean_  |  false |
| disabled | 是否禁用 `false` `true` |  _boolean_ | false |


### Events

| 事件名 |  说明 | 回调参数 |
| --- | --- | --- |
| change | 选择时触发回调函数 | event: MouseEvent |

