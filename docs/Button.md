# Button 按钮

<div class="uku-doc-card">

### 介绍

按钮用于触发一个点击事件

</div>

<div class="uku-doc-card">

### 引入

```javascript
import { createApp } from 'vue';
import { Button } from 'Uku';

const app = createApp();
app.use(Button);

```
</div>

## 代码演示

<div class="uku-doc-card">

### 按钮类型

按钮支持 default、primary、success、warning、danger 五种类型，默认default

```vue
<uku-button type="primary">普通按钮</uku-button>
<uku-button type="success">成功按钮</uku-button>
<uku-button type="warn">警告按钮</uku-button>
<uku-button type="error">错误按钮</uku-button>
<uku-button>默认按钮</uku-button>
```
</div>

<div class="uku-doc-card">

### 朴素按钮

通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```vue
<uku-button type="primary" plain>普通按钮</uku-button>
<uku-button type="success" plain>成功按钮</uku-button>
<uku-button type="warn" plain>警告按钮</uku-button>
<uku-button type="error" plain>错误按钮</uku-button>
```
</div>

<div class="uku-doc-card">

### 按钮尺寸

支持 large、normal、small 三种尺寸，默认为 normal。

```vue
<uku-button type="primary" size="small">小型按钮</uku-button>
<uku-button type="success" size="normal">普通按钮</uku-button>
<uku-button type="warn" size="large">大号按钮</uku-button>
```
</div>

<div class="uku-doc-card">

### 块级

通过 block 属性将按钮设置为块级按钮

```vue
<uku-button type="primary" size="small" block>小型块级按钮</uku-button>
<uku-button type="success" size="normal" block>普通块级按钮</uku-button>
<uku-button type="warn" size="large" block>大号块级按钮</uku-button>
```
</div>

<div class="uku-doc-card">

### 禁用

通过 disabled 属性将按钮设置为禁用状态

```vue
<uku-button type="primary" disabled>普通按钮</uku-button>
<uku-button type="success" plain disabled>成功按钮</uku-button>
```
</div>

<div class="uku-doc-card">

### 自定义颜色

通过 color 属性自定义按钮颜色

```vue
<uku-button color="purple">普通按钮</uku-button>
<uku-button plain color="pink">成功按钮</uku-button>
```
</div>

## API

<div class="uku-doc-card">

### Props

| 参数 |             说明            |                类型                |         默认值       |  
| ---- |             ----            |              ------               |        -------      | 
| type | 类型，可选值为 primary success warning danger |  string            |     default        |
| size | 尺寸，可选值为 large small   |  string | normal |
| color| 按钮颜色 | string | - |
| block|  是否为块级元素 | boolean | false |
| plain| 是否为朴素按钮 | boolean | false |
| disabled | 是否禁用按钮 | boolean | false |
</div>

<div class="uku-doc-card">

### Events

| 事件名 |             说明            |                回调参数                |
| --- | --- | --- |
| click | 点击按钮，且按钮状态不为加载或禁用时触发 | event: MouseEvent |
|touchstart | 开始触摸按钮时触发 | event: TouchEvent |
</div>

<div class="uku-doc-card">

### Slots

| 名称 |             说明            |
| --- | --- |
|default| 按钮内容 |
</div>