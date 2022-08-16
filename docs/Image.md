## Image 图片

### 介绍

用于展示图片

### 引入

```javascript
import { createApp } from 'vue';
import { Image } from 'uku-vue3';

const app = createApp();
app.use(Image);
```

## 代码演示

### 基本用法

可以设置 `src`、`alt`、`with`、`height` 等属性。
```html
<uku-image src="https://avatars.githubusercontent.com/u/34529328?v=4" alt="uku" width="100" height="100" />
```
### 圆角

可通过 `radius` 属性设置圆角。
```html
<uku-image
  src="https://avatars.githubusercontent.com/u/34529328?v=4"
  alt="uku"
  width="100"
  height="100"
  radius="20" />
<uku-image
  src="https://avatars.githubusercontent.com/u/34529328?v=4"
  alt="uku"
  width="100px"
  height="100px"
  radius="100px" />
```

### 图片下方内容

可通过在组件内传入内容，实现在图片下方展示
```html
<uku-image src="https://avatars.githubusercontent.com/u/34529328?v=4" alt="uku" width="100px" height="100px">
  text
</uku-image>
<uku-image src="https://avatars.githubusercontent.com/u/34529328?v=4" alt="uku" width="100px" height="100px">
  <span style="padding: 10px; color: #f65349">text</span>
</uku-image>
```

## API

### Props

| 参数 |  说明 |  类型  |  默认值 |  
| ---- | ---- | ------ | ------- | 
| src  | 图片链接 | `string` | -  |
| alt  | 替代文本 | `string` | - |
| width | 图片宽度，默认单位为 px |  `number` \| `string` | - |
| height | 图片高度，默认单位为 px |  `number` \| `string` | - |
| radius| 图片圆角，默认单位为 px |  `number` \| `string` | 0 |

### Events

| 事件名 | 说明 | 回调参数  |
| --- | --- | --- |
| click | 点击图片  | event: MouseEvent |

### Slots

| 名称 | 说明 |
| --- | --- |
|default| 图片下方内容 |