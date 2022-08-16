# 快速上手

### 介绍

通过本章节你可以了解到 Uku 的安装方法和基本使用。

### 安装

```bash
# 通过 npm 安装
npm i uku-vue3
```

### 引入组件

```javascript
import { createApp } from 'vue';
import Uku from 'uku-vue3';
import "uku-vue3/index.css";

const app = createApp();
app.use(Uku);
```